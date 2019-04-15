import React, { Component } from 'react'
import axios from 'axios'
import Scroll from 'react-scroll'

const ButtonContext = React.createContext()


class ButtonProvider extends Component {
    
    constructor(){
        super()
        this.state = {
            status: 'REQUEST',
            articles:[],
            channel: '',
            toggle: false,
            toggle2: false,
            url: localStorage.getItem("url") || 'us', //returns to the last page viewed
            name: localStorage.getItem("name") || "Top Headlines",
            video: 'off',
            videoUrl: '',
            style:{ animation:''},
            animationToggle: true,
            newsDiv: this.split ? {width: '39vw'} : null,
            split: false,
          
           
           
        }
    }
   
    splitScreen = () => {

        this.setState(prevState => {
            return {
                split: !prevState.split,
                video: !prevState.video,
            }
        })

        this.state.split ? this.setState({ newsDiv: { width: '44vw'}}) : this.setState({ newsDiv: { width: '39vw', fontSize: '11px'}})
    }
    
    
    
    showVideo = (url, name) => {
        this.state.animationToggle ? this.setState({ style:{ animation: 'videoIn 1s'} }) : this.setState({ style:{ animation: 'videoIn2 1s'} })
           this.setState(prevState => {
           return{
             video: 'on',
             toggle: !prevState.toggle,
             channel: name,
             videoUrl: url,
             animationToggle: !prevState.animationToggle,
           }
          })
    }
    
    
    getMount = () => {
        
        axios.get( `https://newsapi.org/v2/top-headlines?${this.state.url.length > 2 ? 'sources' : 'country'}=${this.state.url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
            .then(response => {
                this.setState({
                    articles: response.data.articles,
                    channel: this.state.name,
                    status: 'SUCCESS',
                    video: 'off',
                    
            })
        })
    }

    
    getNews = (url, name) => {  
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
                    channel: name,
                    toggle2: !prevState.toggle2,
                    video: 'off'
                }
            })
            document.body.style.overflow = 'scroll'
            //document.ontouchmove= function(e){ return true }
    }
   

    
    getNews2 = (url, name) => {  
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
                    video: 'off'
                }
            })
            document.body.style.overflow = 'scroll'
           // document.ontouchmove= function(e){ return true }
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
                style:{ animation:''}
               
            }
        })
    }

    
    
    closing = () => {
       // document.ontouchmove= function(e){ return true }
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
                    getNews: this.getNews,
                    getNews2: this.getNews2,
                    getMount: this.getMount,
                    handleToggle: this.handleToggle,
                    handleToggle2 : this.handleToggle2,
                    closing: this.closing,
                    showVideo: this.showVideo,
                    splitScreen: this.splitScreen,
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