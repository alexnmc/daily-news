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
       console.log(this.props.sourceName)
    }
   
    
   
   
    scrolling = () => {
        Scroll.animateScroll.scrollToTop()
        this.myRef.current.scrollTo({top: 0, behavior: 'smooth'})
    }


    batman = () => {
        this.props.splitScreen()
        this.props.hideVideo()
    }
   
    
    render(){
        
        const article = this.props.articles.length ? //either show the articles or not available message
        
            this.props.articles.map(item => {
                return (
                    <div className = "newsDiv" onClick = {this.props.closing} key={Math.random()}>
                        <h1 className = 'itemTitle'> {item.title} </h1>
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
        :
            <div className = 'newsDiv'>
                <h1>not available</h1>
            </div>
            
        
        
        return (
            <div className = 'MAIN'> 
                {this.props.split ?
                    
                    <div className = 'div2'>
                        <div className = "channelName2">
                            <h1 className = "channelName">News for You</h1>
                            <Button1 scrolling = {this.scrolling}/>
                            <Button2/>    
                        </div>
                    
                    <div className = 'splitScreen'>
                            <div className = 'split1' ref = {this.myRef}>
                                <div className = "newLife">
                                    <h1 className = 'channelName3' style ={this.props.style3}>{`Top headlines: ${this.props.sourceName}`}</h1>
                                    <div className = 'smallRed2' onClick={() => this.batman()}></div>
                                </div>
                                {this.props.status === 'REQUEST' ? 
                                    
                                    <div className = "opening3">
                                        <div className = "opening">
                                            <Opening/>
                                        </div>
                                    </div>
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
                        
                        <div className = "opening2">
                            <div className = "opening">
                                <Opening/>
                            </div>
                        </div>
                        :
                        <div className = "div" >
                            <div className = "channelName2" ref = {this.myRef}>
                                <h1 className = "channelName">{this.props.video === 'off' ? this.props.sourceName : this.props.videoName}</h1>
                                <div className = 'splitP' onClick={()=> this.props.splitScreen()}>I</div>
                                <Button1/>
                                <Button2/>
                            </div>
                            {this.props.video === 'on' ?
                                
                                <Video/>
                                :
                                <div className = 'newsBig' style = {this.props.articles.length ? {height: 'auto'} : {height: '100vh'}}>
                                    {article}
                                </div>
                            }
                        </div>
                }
            </div>
        )   
    }
}

 
export default  withButton(App)