import React, { Component } from 'react'
import axios from 'axios'
import Scroll from 'react-scroll'

const ButtonContext = React.createContext()



class ButtonProvider extends Component {
    
    constructor(){
        super()
        this.state = {
            articles:[],
            channel: '',
            toggle: false,
            toggle2: false,
           
           
        }
    }
    
    
   setOverflow = () => {
    //document.ontouchmove = function(e){ e.preventDefault()}
    if(this.state.toggle === this.state.toggle2){ document.body.style.overflow = "hidden" }
   }
    
   
    
    getMount = (url, name) => {
       
        axios.get( `https://newsapi.org/v2/top-headlines?country=us&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
            .then(response => {
                this.setState({
                    articles: response.data.articles,
                    channel: 'USA'
                    
            })
        })
   }

    
   
   getNews = (url, name) => {  
        
        Scroll.animateScroll.scrollToTop()
        axios.get( `https://newsapi.org/v2/${url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            this.setState({
                articles: response.data.articles,
    
            })
        })
            this.setState(prevState=>{
               
               return{ 
                    channel: name,
                    toggle: !prevState.toggle,
                   
                }
            })
            document.body.style.overflow = 'scroll'
            //document.ontouchmove= function(e){ return true }
    }
   

    
    getNews2 = ( url, name) => {  
       
        Scroll.animateScroll.scrollToTop()
        axios.get( `https://newsapi.org/v2/${url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            this.setState({
                articles: response.data.articles,
            })
        })
            this.setState(prevState=>{  
               
               return{ 
                    channel: name,
                    toggle2: !prevState.toggle2,
                    
                }
            })
            document.body.style.overflow = 'scroll'
           // document.ontouchmove= function(e){ return true }
    }
        
    
    
    handleToggle = () =>{
        this.setOverflow()  
    this.setState( prevState =>{   
                return{ 
                    toggle: !prevState.toggle, 
                    toggle2:false,
                }
        })
       
        
    }
    
    
    
    handleToggle2 = () => {
        this.setOverflow()
        this.setState( prevState =>{   
            return{ 
                toggle2: !prevState.toggle2, 
                toggle: false,
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