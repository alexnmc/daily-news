import React, { Component } from 'react'
import axios from 'axios'


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
            split: document.documentElement.clientWidth > 1100 ? true : false ,
            videoName:'BBC News Live',
            sourceName: localStorage.getItem("name") || 'USA',
            style3:{visibility:''},
            switch: true,
            newsDiv :{visibility:'visible'}
        }
    }
   
    
    editSwitch = () =>{
        this.setState(prevState => {
            return {
                switch: !prevState.switch,
            }
        })
    }
    
    
    splitScreen = () => {
        this.setState(prevState => {
            return {
                split: !prevState.split,
                toggle: false,
                toggle2: false
            }
        })
    }
    
    showVideoMini = () => {
        this.setState({
            video:'on',
            newsDiv:{ visibility: 'visible'}
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
                newsDiv:{ visibility: 'visible'}
            }
        })
    }
    
    
    getMount = () => {
        axios.get( `https://newsapi.org/v2/top-headlines?${this.state.url.length > 2 ? 'sources' : 'country'}=${this.state.url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
            .then(response => {
                this.setState({
                    articles: response.data.articles,
                    sourceName: this.state.sourceName,
                    status: 'SUCCESS',
                    video: 'off',
                })
            })
    }


    getNewsSource= (url, name) => { 
        localStorage.setItem("url", url)
        localStorage.setItem("name", name)
        axios.get( `https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            this.setState({
                articles: response.data.articles,
                status: 'SUCCESS',
            })
        })
            this.setState(prevState=>{
                return{ 
                    toggle2: !prevState.toggle2,
                    video: 'off',
                    sourceName: name,
                    style3: {visibility: 'visible'},
                    newsDiv:{ visibility: 'visible'}
                }
            })
        
    }
   
   
    getNewsCountry = (url, name) => {  
        localStorage.setItem("url", url) 
        localStorage.setItem("name", name)
        axios.get( `https://newsapi.org/v2/top-headlines?country=${url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            this.setState({
                articles: response.data.articles,
                status: 'SUCCESS',
            })
        })
            this.setState(prevState=>{  
                return { 
                    toggle2: !prevState.toggle2,
                    video: 'off',
                    sourceName: name,
                    style3: {visibility: 'visible'},
                    newsDiv:{ visibility: 'visible'}
                }
            })
        
    }
        
   
    loadingAnim = () => {
        this.setState({
            status: 'REQUEST'
        })
    }
    
   
    handleToggle = () => {
        document.documentElement.clientWidth < 1100 && !this.state.toggle ? this.setState({newsDiv: { visibility: 'hidden'}}) : this.setState({newsDiv:{ visibility: 'visible'}})  // hide the articles while choosing channels for mobile view only
        this.setState( prevState => {   
                    return { 
                        toggle: !prevState.toggle, 
                        toggle2: false,
                        style:{ animation:''},
                    }
        })
       
    }
    
    
    handleToggle2 = () => {
        document.documentElement.clientWidth < 1100 && !this.state.toggle2 ? this.setState({newsDiv: { visibility: 'hidden'}}) : this.setState({newsDiv:{ visibility: 'visible'}})  
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
                    loadingAnim: this.loadingAnim,
                    editSwitch: this.editSwitch,
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