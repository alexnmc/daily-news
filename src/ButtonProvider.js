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
                }
            })
        
    }
        
   
    loadingAnim = () => {
        this.setState({
            status: 'REQUEST'
        })
    }
    
   
    handleToggle = () => {
       //if( document.documentElement.clientWidth < 1100){this.state.toggle ? this.setState({stopScroll: { overflow: 'scroll'}}) : this.setState({stopScroll:{ overflow: 'hidden'}})}  // block scrolling only on mobile view
        this.setState( prevState => {   
                    return { 
                        toggle: !prevState.toggle, 
                        toggle2: false,
                        style:{ animation:''},
                    }
        })
    }
    
    
    handleToggle2 = () => {
        // button2Wrap covers the entire page therefore it is imposible to scroll, we don't need the code below:
       //if( document.documentElement.clientWidth < 1100){this.state.toggle2 ? this.setState({stopScroll: { overflow: 'scroll'}}) : this.setState({stopScroll:{ overflow: 'hidden'}})}
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