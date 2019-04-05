import React, { Component } from 'react'
import Scroll from 'react-scroll'
import Button1 from './Button1'
import Button2 from './Button2'
import {withButton} from './ButtonProvider'
import Opening from './Opening'




class App extends Component { 
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

   
    componentDidMount(){
       
        this.props.getMount()
    }
   
    renderSpinner() {
        return ( 
            <div className = "opening2">
            <div className = "opening">
            <Opening/>
            </div>
            </div>
        )
    }

    render(){
        
       
        const article = this.props.articles.map(item => {
            
            return (
                <div className = "newsDiv" onClick = {this.props.closing} key={Math.random()}>
                    <h1  > {item.title} </h1>
                    <img  src={ item.urlToImage} alt = '' />
                    <h2 > {item.description} </h2>
                    <h2 className = "name" >{item.source.name}</h2>
                    <div className = "bottom">
                        <a className = "link"  href={item.url}>read more</a>
                        <div className = "topP" onClick = {()=> Scroll.animateScroll.scrollToTop()}></div>
                    </div>
                </div>
            )
        })
       
        
        return (
            this.props.status == 'REQUEST' ? 
        
            this.renderSpinner() 

        :
            <div className = "div" >
               
                <div className = "channelName2" >
                    <h1 className = "channelName" >{this.props.channel} </h1>
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