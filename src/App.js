import React, { Component } from 'react'
import Scroll from 'react-scroll'
import Button1 from './Button1'
import Button2 from './Button2'
import {withButton} from './ButtonProvider'



 class App extends Component { // no need to export on the bottom of the page
    constructor(props){
        super(props)
       
        this.state = {
            articles:[],
            channel: 'Hello World',
            toggle: this.props.toggle,
            toggle2: this.props.toggle2,
           
        }
    }

    
    componentDidMount(){
     
        this.props.getMount()
    }
   

    

     
    render(){
    
        const article = this.props.articles.map(item => {
            
            return(
                
                <div className = "newsDiv"  onClick = {this.props.closing} key={Math.random()}>
                    <h1> {item.title} </h1>
                    <img src={ item.urlToImage} alt = '' onClick = {this.closing}/>
                    <h2 onClick = {this.props.closing}> {item.description} </h2>
                    <h2 className = "name" onClick = {this.props.closing}>{item.source.name}</h2>
                    <div className = "bottom">
                        <a className = "link" onClick = {this.props.closing} href={item.url}>read more</a>
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