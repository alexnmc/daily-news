import React, { Component } from 'react'
import Button1 from './Button1'
import Button2 from './Button2'
import {withButton} from './ButtonProvider'
import Opening from './Opening'
import Video from './Video'
import Video2 from './Video2'
import Scroll from 'react-scroll'



class App extends Component { 
    constructor(props){
        super(props)
        this.myRef = React.createRef()
        
        
        this.state = {
            call: window.addEventListener("resize", this.onResize) //if the window size changed call the function onResize
        }
    }

    
    onResize = () =>{if(document.documentElement.clientWidth < 1100 && this.props.split === true){return window.location.reload()}}
    //refresh the page for the mobile view
   
    componentDidMount(){
        this.props.getMount()
        
    }
   
    scrolling = () => {
        Scroll.animateScroll.scrollToTop() 
        this.myRef.current.scrollTo({top: 0, behavior: 'smooth'})
    }

    
    fullScreen = () => {
        this.props.splitScreen()
        this.props.hideVideo()
    }
   
    
    render(){
        
        const article = this.props.articles.length ? //either show the articles or not available message
            this.props.articles.map(item => {
                return (
                    <div className = {this.props.split ? "newsDiv" : "newsDiv2"} onClick = {this.props.closing} key={Math.random()}>
                        <h1 className = 'itemTitle'> {item.title} </h1>
                        <img src={ item.urlToImage} alt = ''/>
                        <h2> {item.description} </h2>
                        <h2 className = "name">{item.source.name}</h2>
                        <div className = "bottom">
                            <a className = "link"  href={item.url}>read more</a>
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
                <div className = 'div2'>
                    <div className = "channelName2">
                        <h1 className = "channelName">{this.props.split? "News for You" : this.props.video === 'off' ? this.props.sourceName : this.props.videoName}</h1>
                        <Button1 scrolling = {this.scrolling}/>
                        <Button2/>    
                    </div>
                {this.props.split ?
                    <div className = 'splitScreen'>
                            <div className = 'split1' ref = {this.myRef}>
                                <div className = "newLife">
                                    <h1 className = 'channelName3' style ={this.props.style3}>{`Top headlines: ${this.props.sourceName}`}</h1>
                                    <div className = 'smallRed2' onClick={() => this.fullScreen()}></div>
                                </div>
                                { this.props.status === 'REQUEST' ? 
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
                :    
                    <div ref = {this.myRef} className = 'div' style = {this.props.stopScroll}>
                        { this.props.status === 'REQUEST' ? 
                            <div className = "opening2">
                                <div className = "opening">
                                    <Opening/>
                                </div>
                            </div>
                            :
                            <div >
                                <div className = " channelName2">
                                    <div className = 'splitP' onClick={()=> this.props.splitScreen()}>|</div>
                                </div>
                                { this.props.video === 'on' ?
                                    <Video/>
                                    :
                                    <div className = 'newsBig' style = {this.props.articles.length ? {height: 'auto'} : {height: '100vh'}}>
                                        {article}
                                    </div>
                                }
                            </div>
                        }
                    </div>
                    }
                </div>
            </div>
            
        )   
    }
}

 
export default  withButton(App)