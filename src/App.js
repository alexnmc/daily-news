import React, { Component } from 'react'
import Scroll from 'react-scroll'
import Button1 from './Button1'
import Button2 from './Button2'
import {withButton} from './ButtonProvider'
import Opening from './Opening'
import Video from './Video'
import Video2 from './Video2'




class App extends Component { 
    constructor(props){
        super(props)
        this.myRef = React.createRef()
        this.state = {
            
            
        }
    }

   
    componentDidMount(){
       this.props.getMount()
    }
   
    
    loadingAnimation = () => {
        return ( 
            <div className = "opening2">
                <div className = "opening">
                    <Opening/>
                </div>
            </div>
        )
    }

   
    scrolling = () => {
        Scroll.animateScroll.scrollToTop()
        if(this.props.split){return this.myRef.current.scrollTo({top: 0, behavior: 'smooth'})}
    }
    
    
    render(){
        
        const article = this.props.articles.map(item => {
            
            return (
                <div className = "newsDiv" onClick = {this.props.closing} key={Math.random()} style = {this.props.newsDiv}>
                    <h1> {item.title} </h1>
                    <img src={ item.urlToImage} alt = ''/>
                    <h2> {item.description} </h2>
                    <h2 className = "name">{item.source.name}</h2>
                    <div className = "bottom">
                        <a className = "link"  href={item.url} onClick = {this.props.stopScroll}>read more</a>
                        <div className = "topP" onClick = {()=> this.scrolling()}></div>
                    </div>
                </div>
            )
    })
       
        
        return (
        
        <div className = 'MAIN'> 
            {this.props.split ?
                <div className = 'div2'>
                    <div className = "channelName2">
                        <h1 className = "channelName" >{this.props.channel}</h1>
                        <div className = 'splitP' onClick={()=> this.props.splitScreen()}>I</div>
                        <Button1/>
                        <Button2/>                
                    </div>
                
                <div className = 'splitScreen'>
                        <div className = 'split1' ref = {this.myRef}>
                            <h1 className = 'channelName2'>{this.props.sourceName}</h1>
                            {this.props.status === 'REQUEST' ? 
                                
                                this.loadingAnimation() 
                                :
                                article
                            }
                        </div>
                        
                        <div className = 'split2'>
                            <Video2/>
                        </div>
                </div>
                </div>
      
            
        :     
            
        this.props.status === 'REQUEST' ? 
                
                this.loadingAnimation() 
                :

                <div className = "div">
                
                    <div className = "channelName2">
                        <h1 className = "channelName" >{this.props.channel}</h1>
                        <div className = 'splitP' onClick={()=> this.props.splitScreen()}>I</div>
                        <Button1/>
                        <Button2/>
                    </div>
                        {this.props.video === 'on' ?
                            <Video/>
                            :
                            article
                        }
                </div>
                }
                </div>
                
        )   
    }
}

 
export default  withButton(App)