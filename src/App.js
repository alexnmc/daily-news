import React, { Component } from 'react'
import Scroll from 'react-scroll'
import axios from 'axios'


export default class App extends Component { // no need to exposrt on the bottom of the page
    constructor(){
        super()
        this.state = {
            articles:[],
            channel:'Please Choose A Source:'

        }
    }

    
    componentDidMount(){

       return this.getNews("https://newsapi.org/v2/top-headlines?sources=axios&apiKey="), this.setState({ channel: "Choose a source:"}) 
    }


    getNews = (url) => {  
        
        Scroll.animateScroll.scrollToTop()
        axios.get( `${url}`+ 'f64c9be83f094f43a2c3954a6c1ec8aa')
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
                    
                        <p onClick = {()=> { return this.getNews("https://newsapi.org/v2/top-headlines?sources=axios&apiKey="), this.setState({ channel: "Axios"})}}>Axios</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/everything?q=apple&from=2019-02-02&to=2019-02-02&sortBy=popularity&apiKey="), this.setState({channel: "Apple in the News"})}}>Apple News</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey="), this.setState({channel:"ABC News"})}}>ABC </p>
                        <p onClick = {()=> { return this.getNews("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey="), this.setState({channel: "BBC News"})}}>BBC News</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=cnn&apiKey="), this.setState({ channel: "CNN"})}}>CNN</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey="), this.setState({ channel: "CNBC News"})}}>CNBC </p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=daily-mail&apiKey="), this.setState({ channel: "Daily Mail News"})}}>Daily Mail</p>
                        <p onClick = {()=> { return this.getNews("https://newsapi.org/v2/everything?domains=wsj.com&apiKey="),this.setState({ channel: "Wall Street Journal"})}}>Wall Street Journal</p>
                        <p onClick = {()=> { return this.getNews("https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey="), this.setState({ channel: "BBC Sport"})}}>BBC Sport</p>
                        <p onClick = {()=> { return this.getNews("https://newsapi.org/v2/top-headlines?sources=financial-times&apiKey="), this.setState({ channel: "Financial Times"})}}>Financial Times</p>
                        <p onClick = {()=> { return this.getNews("https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey="), this.setState({ channel: "Crypto Coins News"})}}>Crypto News</p>
                        <p onClick = {()=> { return this.getNews("https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey="), this.setState({ channel: "FOX News"})}}>FOX News</p>
                        <p onClick = {()=> { return this.getNews("https://newsapi.org/v2/top-headlines?sources=espn&apiKey="), this.setState({ channel: "ESPN News"})}}>ESPN</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=entertainment-weekly&apiKey="), this.setState({ channel: "Entertainment Weekly"})}}>Entertainment Weekly</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey="), this.setState({ channel: "Business Insider"})}}>Business Insider</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=business-insider-uk&apiKey="), this.setState({ channel: "Business Insider UK"})}}>Business Insider UK</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=google-news&apiKey="), this.setState({ channel: "Google News"})}}>Google News</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey="), this.setState({ channel: "FOX News"})}}>FOX News</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=independent&apiKey="), this.setState({ channel: "Independent"})}}>Independent</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=fox-sports&apiKey="), this.setState({ channel: "FOX Sports"})}}>FOX Sports</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey"), this.setState({ channel: "National Geographic"})}}>National Geographic</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=mtv-news&apiKey="), this.setState({ channel: "Music Television News"})}}>MTV News</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=newsweek&apiKey="), this.setState({ channel: "Newsweek"})}}>Newsweek</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=news24&apiKey="), this.setState({ channel: "NEWS 24"})}}>NEWS 24</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=the-economist&apiKey="), this.setState({ channel: "The Economist"})}}>The Economist</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=the-washington-times&apiKey="), this.setState({ channel: "The Washington Times"})}}>The Washington Times</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=the-washington-post&apiKey="), this.setState({ channel: "The Washington Post"})}}>The Washington Post</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=time&apiKey="), this.setState({ channel: "TIME"})}}>TIME</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=usa-today&apiKey="), this.setState({ channel: "USA Today"})}}>USA Today</p>
                        <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey="), this.setState({ channel: "The New York Times"})}}>New York Times</p>
                        <p onClick = {()=> { return this.getNews("https://newsapi.org/v2/top-headlines?sources=cbs-news&apiKey="), this.setState({ channel: "CBS News"})}}>CBS </p>
                        
                    </div>
                </div>
                <div className = "spaceDiv">
                
                </div>
                
                 {article}
           
            </div>
        )
    }
}

              