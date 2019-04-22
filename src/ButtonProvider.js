import React, { Component } from 'react'
import axios from 'axios'
import Scroll from 'react-scroll'


const ButtonContext = React.createContext()


class ButtonProvider extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            status: 'REQUEST',
            articles:[],
            toggle: false,
            toggle2: false,
            url: localStorage.getItem("url") || 'us', //returns to the last page viewed
            name: localStorage.getItem("name") || "USA",
            video: 'off',
            videoUrl: '',
            style:{ animation:''},
            animationToggle: true,
            newsDiv: !this.split ? {width: '38vw', fontSize:'10px'} : null,
            split: true,
            videoName:'Sky News Live',
            sourceName: localStorage.getItem("name"),
            style3:{visibility:''},
            
        }
    }
   
    
    splitScreen = () => {
        this.setState(prevState => {
            return {
                split: !prevState.split,
            }
        })
        this.state.split ? this.setState({newsDiv: {width: '44vw', fontSize: '12px'}}) : this.setState({newsDiv: {width: '38vw', fontSize: '10px'}})
    }
    
    
    showVideoMini = () => {
        this.setState({
            video:'on'
        })
    }

    
    hideVideo = () => {
        this.setState({
            video:'off'
        })
    }
    
    
    showVideo = (url, name) => {
        this.state.animationToggle ? this.setState({ style:{ animation: 'videoIn 1s'} }) : this.setState({style:{ animation: 'videoIn2 1s'}})
        
        this.setState(prevState => {
           return{
                video: 'on',
                toggle: !prevState.toggle,
                videoUrl: url,
                animationToggle: !prevState.animationToggle,
                videoName: name,
            }
        })
    }
    
    
    getMount = () => {
        axios.get( `https://newsapi.org/v2/top-headlines?${this.state.url.length > 2 ? 'sources' : 'country'}=${this.state.url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
            .then(response => {
                this.setState({
                    articles: response.data.articles,
                    sourceName: this.state.name,
                    status: 'SUCCESS',
                    video: 'off',
                })
            })
    }


    
    getNewsSource= (url, name) => {  
        localStorage.setItem("url", url)
        localStorage.setItem("name", name)
        Scroll.animateScroll.scrollToTop()
        axios.get( `https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            this.setState({
                articles: response.data.articles,
            })
        })
            this.setState(prevState=>{
                return{ 
                    toggle2: !prevState.toggle2,
                    video: 'off',
                    sourceName: name,
                    style3: {visibility: 'visible'}
                }
            })
        document.body.style.overflow = 'scroll'
    }
   
   
    getNewsCountry = (url, name) => {  
        localStorage.setItem("url", url) 
        localStorage.setItem("name", name)
        Scroll.animateScroll.scrollToTop()
        axios.get( `https://newsapi.org/v2/top-headlines?country=${url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            this.setState({
                articles: response.data.articles,
            })
        })
            this.setState(prevState=>{  
                return { 
                    channel: name,
                    toggle2: !prevState.toggle2,
                    video: 'off',
                    sourceName: name,
                    style3: {visibility: 'visible'}
                }
            })
        document.body.style.overflow = 'scroll'
    }
        
    
    
    handleToggle = () => {
        this.state.toggle ? document.body.style.overflow = 'scroll' : document.body.style.overflow = 'hidden'
        this.setState( prevState => {   
                    return { 
                        toggle: !prevState.toggle, 
                        toggle2: false,
                        style:{ animation:''},
                    }
        })
    }
    
    
    
    handleToggle2 = () => {
        this.state.toggle2 ? document.body.style.overflow = 'scroll' : document.body.style.overflow = 'hidden'
        this.setState( prevState => {   
            return { 
                toggle2: !prevState.toggle2, 
                toggle: false,
                style:{ animation:''},
                style3: !this.state.toggle2  ? {visibility: 'hidden'} : {visibility: 'visible'},
            }
        })
    }

    
    
    closing = () => {
        document.body.style.overflow = "scroll"
        this.setState({
            toggle: false,
            toggle2: false
        })
    }
    
    
    render() {
      
        return (
            <ButtonContext.Provider
                value={{
                    getNewsSource: this.getNewsSource,
                    getNewsCountry: this.getNewsCountry,
                    getMount: this.getMount,
                    handleToggle: this.handleToggle,
                    handleToggle2 : this.handleToggle2,
                    closing: this.closing,
                    showVideo: this.showVideo,
                    splitScreen: this.splitScreen,
                    showVideoMini: this.showVideoMini,
                    hideVideo: this.hideVideo,
                    ...this.state
                }}>
                {this.props.children}
            </ButtonContext.Provider>
        )
    }
}

export default ButtonProvider


export const withButton = C => props => (
    <ButtonContext.Consumer>
        {value => <C {...props} {...value}/> }
    </ButtonContext.Consumer>
)