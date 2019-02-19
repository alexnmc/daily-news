import React, { Component } from 'react'
import Scroll from 'react-scroll'
import axios from 'axios'



export default class App extends Component { // no need to export on the bottom of the page
    constructor(){
        super()
        this.state = {
            articles:[],
            channel:'Please Choose A Source:'

        }
    }

    
    componentDidMount(){

       return this.getNews("top-headlines?sources=axios"), this.setState({ channel: "Choose a source:"}) 
    }


    getNews = (url) => {  
        
        Scroll.animateScroll.scrollToTop()
        axios.get( `https://newsapi.org/v2/${url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            console.log(response.data.articles)
            this.setState({
                articles: response.data.articles
            })
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
                
                <div className = "navbarWrap">
                    <div className = "navbar">
                    
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=axios"), this.setState({ channel: "Axios"})}}>Axios</p>
                        <p onClick = {()=> { return this.getNews("everything?q=apple&from=2019-02-02&to=2019-02-02&sortBy=popularity"), this.setState({channel: "Apple in the News"})}}>Apple News</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=abc-news"), this.setState({channel:"ABC News"})}}>ABC </p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=bbc-news"), this.setState({channel: "BBC News"})}}>BBC News</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=cnn"), this.setState({ channel: "CNN"})}}>CNN</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=cnbc"), this.setState({ channel: "CNBC News"})}}>CNBC </p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=daily-mail"), this.setState({ channel: "Daily Mail News"})}}>Daily Mail</p>
                        <p onClick = {()=> { return this.getNews("everything?domains=wsj.com"),this.setState({ channel: "Wall Street Journal"})}}>Wall Street Journal</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=bbc-sport"), this.setState({ channel: "BBC Sport"})}}>BBC Sport</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=financial-times"), this.setState({ channel: "Financial Times"})}}>Financial Times</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=crypto-coins-news"), this.setState({ channel: "Crypto Coins News"})}}>Crypto News</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=fox-news"), this.setState({ channel: "FOX News"})}}>FOX News</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=espn"), this.setState({ channel: "ESPN News"})}}>ESPN</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=entertainment-weekly"), this.setState({ channel: "Entertainment Weekly"})}}>Entertainment Weekly</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=business-insider"), this.setState({ channel: "Business Insider"})}}>Business Insider</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=business-insider-uk"), this.setState({ channel: "Business Insider UK"})}}>Business Insider UK</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=google-news"), this.setState({ channel: "Google News"})}}>Google News</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=nfl-news"), this.setState({ channel: "NFL News"})}}>NFL News</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=independent"), this.setState({ channel: "Independent"})}}>Independent</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=fox-sports"), this.setState({ channel: "FOX Sports"})}}>FOX Sports</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=national-geographic"), this.setState({ channel: "National Geographic"})}}>National Geographic</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=mtv-news"), this.setState({ channel: "Music Television News"})}}>MTV News</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=newsweek"), this.setState({ channel: "Newsweek"})}}>Newsweek</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=news24"), this.setState({ channel: "NEWS 24"})}}>NEWS 24</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=the-economist"), this.setState({ channel: "The Economist"})}}>The Economist</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=the-washington-times"), this.setState({ channel: "The Washington Times"})}}>The Washington Times</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=the-washington-post"), this.setState({ channel: "The Washington Post"})}}>The Washington Post</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=time"), this.setState({ channel: "TIME"})}}>TIME</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=usa-today"), this.setState({ channel: "USA Today"})}}>USA Today</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=the-new-york-times"), this.setState({ channel: "The New York Times"})}}>New York Times</p>
                        <p onClick = {()=> { return this.getNews("top-headlines?sources=cbs-news"), this.setState({ channel: "CBS News"})}}>CBS</p>
                        
                    </div>
                </div>
                <div className = "spaceDiv">
                
                </div>
                
                {article}
           
            </div>
        )
    }
}

              