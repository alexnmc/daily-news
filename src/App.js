import React, { Component } from 'react'
import axios from 'axios'


export default class App extends Component { // no need to exposrt on the bottom of the page
    constructor(){
        super()
        this.state = {
            articles:[],
            channel:'Please Choose A Channel'

        }
    }

   
    
    getNews = (url) => {  
        axios.get( `${url}f64c9be83f094f43a2c3954a6c1ec8aa`)
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
                 <div>
                <h1 className = "channelName">{this.state.channel}</h1>
                </div>
                
                <div className = "navbarWrap">
                <div className = "navbar">
                
                <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/everything?q=apple&from=2019-02-02&to=2019-02-02&sortBy=popularity&apiKey="), this.setState({channel: "Apple in the News"})}}>Apple News</p>
                <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey="), this.setState({channel:"ABC News"})}}>ABC</p>
                <p onClick = {()=> { return this.getNews("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey="), this.setState({channel: "BBC News"})}}>BBC</p>
                <p onClick = {()=> this.getNews("https://newsapi.org/v2/top-headlines?sources=cbs-news&apiKey=")}>CBS</p>
                <p onClick = {()=> this.getNews("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=")}>Wall Street Journal</p>
                <p onClick = {()=> this.getNews("https://newsapi.org/v2/top-headlines?sources=axios&apiKey=")}>AXIOS</p>
                <p onClick = {()=> this.getNews("https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=")}>BBC Sport</p>
                <p onClick = {()=> this.getNews("https://newsapi.org/v2/top-headlines?sources=financial-times&apiKey=")}>Financial Times</p>
                <p onClick = {()=> this.getNews("https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=")}>Crypto Coins News</p>
                <p onClick = {()=> this.getNews("https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=")}>FOX News</p>
                <p onClick = {()=> { return this.getNews("https://newsapi.org/v2/top-headlines?sources=espn&apiKey="), this.setState({ channel: "ESPN News"})}}>ESPN</p>
                <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey="), this.setState({ channel: "CNBC News"})}}>CNBC</p>
                <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=daily-mail&apiKey="), this.setState({ channel: "Daily Mail News"})}}>Daily Mail</p>
                <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=entertainment-weekly&apiKey="), this.setState({ channel: "Entertainment Weekly"})}}>Entertainment Weekly</p>
                <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey="), this.setState({ channel: "Business Insider"})}}>Business Insider</p>
                <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=business-insider-uk&apiKey="), this.setState({ channel: "Business Insider UK"})}}>Business Insider UK</p>
                <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=google-news&apiKey="), this.setState({ channel: "Google News"})}}>Google News</p>
                <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey="), this.setState({ channel: "FOX News"})}}>FOX News</p>
                <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=independent&apiKey="), this.setState({ channel: "Independent"})}}>Independent</p>
                <p onClick = {()=>{ return this.getNews("https://newsapi.org/v2/top-headlines?sources=fox-sports&apiKey="), this.setState({ channel: "FOX Sports"})}}>FOX Sports</p>
                <p onClick = {()=>{ return this.getNews(""), this.setState({ channel: ""})}}></p>
                <p onClick = {()=>{ return this.getNews(""), this.setState({ channel: ""})}}></p>
                <p onClick = {()=>{ return this.getNews(""), this.setState({ channel: ""})}}></p>
                <p onClick = {()=>{ return this.getNews(""), this.setState({ channel: ""})}}></p>
                <p onClick = {()=>{ return this.getNews(""), this.setState({ channel: ""})}}></p>
                
                
                </div>
                </div>
                <div className = "spaceDiv"></div>
                
                {article}
            </div>
        )
    }
}

              