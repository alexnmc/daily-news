import React, { Component } from 'react'
import Scroll from 'react-scroll'
import Button1 from './Button1'
import Button2 from './Button2'
import {withButton} from './ButtonProvider'



 class App extends Component { // no need to export on the bottom of the page
    constructor(props){
        super(props)
       
        this.state = {
            
           
        }
    }

    
    componentDidMount(){
      
        this.props.getMount(this.props.url2, this.props.channel)
    }
   

    

     
    render(){
    
        const article = this.props.articles.map(item => {
            
            return(
                
                <div className = "newsDiv"  key={Math.random()}>
                    <h1> {item.title} </h1>
                    <img src={ item.urlToImage} alt = '' />
                    <h2 > {item.description} </h2>
                    <h2 className = "name" >{item.source.name}</h2>
                    <div className = "bottom">
                        <a className = "link"  href={item.url}>read more</a>
                        <div className = "topP" onClick = {()=> Scroll.animateScroll.scrollToTop()}></div>
                    </div>
                </div>
            )
    })
       
        
        return(
            <div className = "div" >
                <div className = "channelName2">
                    <h1 className = "channelName">{this.props.channel}</h1>
                    <Button1/>
                    <Button2/>
                </div>
                    {article}
                <div className = "spaceDiv"></div>
            </div>
        )
    }
}

 export default  withButton(App)