import React, { Component } from 'react'
import Scroll from 'react-scroll'
import axios from 'axios'



export default class App extends Component { // no need to export on the bottom of the page
    constructor(){
        super()
        this.state = {
            articles:[],
            channel: 'Please Choose A Source:',
            toggle: true,
            style : {animation: ''}
        }
    }

    
    componentDidMount(){

       return this.getNews("top-headlines?sources=axios", 'Choose a source:') 
    }


    getNews = (url, name) => {  
        
        Scroll.animateScroll.scrollToTop()
        axios.get( `https://newsapi.org/v2/${url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            this.setState({
                articles: response.data.articles,
            })
        })
            this.setState({
                channel: name
            })
    }
    
    
   
    render(){
    
        const article = this.state.articles.map(item => {
            
        return(
            
            <div className = "newsDiv">
               <h1> {item.title}</h1>
               <img src={ item.urlToImage} alt = ''/>
               <h2> {item.description}</h2>
               <h2 className = "name">{item.source.name}</h2>
               <a className = "link" href={item.url}>click here</a>
            </div>
        )
    })
       
        return(
             
            <div className = "div">
                <div className = "channelName2">
                    <h1 className = "channelName">{this.state.channel}</h1>
                </div>
                
                <div className = "transitions">
                { this.state.toggle ?

                <button onClick = {()=>  this.setState({ toggle: false, style: {animation: "fadein 2s"}})}  >Channels</button>
                :
                <div className = "navbarWrap" style = {this.state.style}>
               
                    <div className = "navbar">
                        <div className = "close">
                            <p  className = "close2" onClick = {()=> this.setState({ toggle: true})}>x</p>
                        </div>
                        <p onClick = {()=> this.getNews("top-headlines?sources=axios", "Axios")}>Axios</p>
                        <p onClick = {()=> this.getNews("everything?q=apple&from=2019-02-02&to=2019-02-02&sortBy=popularity", "Apple in the news")}>Apple News</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=abc-news", "ABC News")}>ABC </p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=bbc-news", "BBC News")}>BBC News</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=cnn","CNN")}>CNN</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=cnbc", "CNBC News")}>CNBC </p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=daily-mail", "Daily Mail News")}>Daily Mail</p>
                        <p onClick = {()=> this.getNews("everything?domains=wsj.com", 'Wall Street Journal')}>Wall Street Journal</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=bbc-sport", 'BBC Sport')}>BBC Sport</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=financial-times", 'Financial Times')}>Financial Times</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=crypto-coins-news", 'Crypto Coins News')}>Crypto News</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=fox-news", 'FOX News')}>FOX News</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=espn", 'ESPN News')}>ESPN</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=entertainment-weekly", 'Entertaiment Weekly')}>Entertainment Weekly</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=business-insider", 'Businsess Insider')}>Business Insider</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=business-insider-uk", 'Business Insider UK')}>Business Insider UK</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=google-news" , 'Google News')}>Google News</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=nfl-news", 'NFL News')}>NFL News</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=independent", 'Independent')}>Independent</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=fox-sports", 'FOX Sports')}>FOX Sports</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=national-geographic", 'National Georgraphic')}>National Geographic</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=mtv-news", 'Muisc Televison News')}>MTV News</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=newsweek", 'Newsweek')}>Newsweek</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=news24", 'NEWS 24')}>NEWS 24</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=the-economist", 'The Economist')}>The Economist</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=the-washington-times", 'The Washington Times')}>The Washington Times</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=the-washington-post", 'The Washingtom Post')}>The Washington Post</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=time", 'TIME')}>TIME</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=usa-today", 'USA Today')}>USA Today</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=the-new-york-times", 'The New York Times')}>New York Times</p>
                        <p onClick = {()=> this.getNews("top-headlines?sources=cbs-news", 'CBS News')}>CBS</p>
                        
                    </div>
                </div>
                }
            </div>
               {article}
               <div className = "spaceDiv"></div>
           
            </div>
        )
    }
}

              