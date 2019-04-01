import React, { Component } from 'react'
import Scroll from 'react-scroll'
import axios from 'axios'



export default class App extends Component { // no need to export on the bottom of the page
    constructor(){
        super()
        this.state = {
            articles:[],
            channel: 'Choose a Source',
            toggle: false,
            toggle2: false,
            style : {animation: ''}
        }
    }

    
    componentDidMount(){
       
        axios.get( `https://newsapi.org/v2/top-headlines?country=us&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            this.setState({
                articles: response.data.articles,
                
            })
        })
    }
   


    
    
    getNews = (url, name) => {  
        
        Scroll.animateScroll.scrollToTop()
        axios.get( `https://newsapi.org/v2/${url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            this.setState({
                articles: response.data.articles,
            })
        })
            this.setState(prevState=>{
               
               return{ 
                    channel: name,
                    toggle: !prevState.toggle,
                }
            })
    }
    

    closing = () => {
        this.setState({toggle: false,
                        toggle2: false
        })
    }

     

    
    getNews2 = (url, name) => {  
        
        Scroll.animateScroll.scrollToTop()
        axios.get( `https://newsapi.org/v2/${url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            this.setState({
                articles: response.data.articles,
            })
        })
            this.setState(prevState=>{
               
               return{ 
                    channel: name,
                    toggle2: !prevState.toggle2,
                }
            })
    }
    
   
    render(){
    
        const article = this.state.articles.map(item => {
            
        return(
            
            <div className = "newsDiv"  onClick = {this.closing}>
               <h1> {item.title} </h1>
               <img src={ item.urlToImage} alt = '' onClick = {this.closing}/>
               <h2 onClick = {this.closing}> {item.description} </h2>
               <h2 className = "name" onClick = {this.closing}>{item.source.name}</h2>
               <div className = "bottom">
               <a className = "link" onClick = {this.closing} href={item.url}>read more</a>
               <div className = "topP" onClick = {()=> Scroll.animateScroll.scrollToTop()}></div>
               </div>
            </div>
        )
    })
       
        return(
             
            <div className = "div" >
                <div className = "channelName2">
                            <h1 className = "channelName">{this.state.channel}</h1>
                    
                        <div className = "button2Wrap">
                            <button  className = "button2" onClick = {()=>  this.setState( prevState =>{return{ toggle2: !prevState.toggle2, toggle:false}})} >Country</button>
                            { this.state.toggle2 ?
                            
                            <div className = "navbarWrap2">
                                <div className = "navbar">
                                    <p onClick = {()=> this.getNews2("top-headlines?country=ar", "Argentina")}>Argentina</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=au", "Australia")}>Australia</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=at", "Austria")}>Austria</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=be", "Belgium")}>Belgium</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=br", "Brazil")}>Brazil</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=bg", "Bulgaria")}>Bulgaria</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=ca", "Canada")}>Canada</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=cu", "Cuba")}>Cuba</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=cz", "Czech Republic")}>Czech Republic</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=co", "Colombia")}>Colombia</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=eg", "China")}>China</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=eg", "Egypt")}>Egypt</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=fr", "France")}>France</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=de", "Germany")}>Germany</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=gr", "Greece")}>Greece</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=hk", "Honk Kong")}>Honk Kong</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=hu", "Hungary")}>Hungary</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=it", "Italy")}>Italy</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=id", "Indonesia")}>Indonesia</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=ie", "Ireland")}>Ireland</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=in", "India")}>India</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=il", "Israel")}>Israel</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=jp", "Japan")}>Japan</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=kr", "Korea")}>Korea</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=lv", "Latvia")}>Latvia</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=lt", "Lithuania")}>Lithuania</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=my", "Malaysia")}>Malaysia</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=mx", "Mexico")}>Mexico</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=ma", "Morocco")}>Morocco</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=nl", "Netherlands")}>Netherlands</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=nz", "New Zealand")}>New Zealand</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=ng", "Nigeria")}>Nigeria</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=no", "Norway")}>Norway</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=pl", "Poland")}>Poland</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=pt", "Portugal")}>Portugal</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=ru", "Russia")}>Russia</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=ro", "Romania")}>Romania</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=sa", "Saudi Arabia")}>Saudi Arabia</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=rs", "Serbia")}>Serbia</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=sg", "Singapore")}>Singapore</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=sl", "Slovakia")}>Slovakia</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=si", "Slovenia")}>Slovenia</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=za", "South Africa")}>South Africa</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=se", "Sweeden")}>Sweeden</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=ch", "Swiss")}>Swiss</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=tw", "Taiwan")}>Taiwan</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=th", "Thailand")}>Thailand</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=tr", "Turkey")}>Turkey</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=ua", "Ukraine")}>Ukraine</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=ae", "United Arab Emirates")}>United Arab Emirates</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=gb", "United Kingdom")}>United Kingdom</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=us", "USA")}>USA</p>
                                    <p onClick = {()=> this.getNews2("top-headlines?country=ve", "Venezuela")}>Venezuela</p>
                                </div>
                            </div>
                        
                                :

                                null
                        
                            }
                        </div>
                        
                        <div className = "transitions">
                            <button className = " button1" onClick = {()=>  this.setState( prevState =>{return{ toggle: !prevState.toggle, toggle2:false,  style: {animation: "fadein 1s"}}})}  >Channel</button>
                            { this.state.toggle ?
                            
                                <div className = "navbarWrap" style = {this.state.style}>
                                    <div className = "navbar">
                                        <p  className = 'axios' onClick = {()=> this.getNews("top-headlines?sources=axios", "Axios")}>Axios</p>
                                        <p onClick = {()=> this.getNews("top-headlines?sources=abc-news", "ABC News")}>ABC </p>
                                        <p onClick = {()=> this.getNews("top-headlines?sources=bbc-news", "BBC News")}>BBC News</p>
                                        <p onClick = {()=> this.getNews("top-headlines?sources=bbc-sport", 'BBC Sport')}>BBC Sport</p>
                                        <p onClick = {()=> this.getNews("top-headlines?sources=cbs-news", 'CBS News')}>CBS</p>
                                        <p onClick = {()=> this.getNews("top-headlines?sources=cnn","CNN")}>CNN</p>
                                        <p onClick = {()=> this.getNews("top-headlines?sources=cnbc", "CNBC News")}>CNBC </p>
                                        <p onClick = {()=> this.getNews("top-headlines?sources=daily-mail", "Daily Mail News")}>Daily Mail</p>
                                        <p onClick = {()=> this.getNews("top-headlines?sources=reuters", "Reuters")}>Reuters</p>
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
                                        <p onClick = {()=> this.getNews("top-headlines?sources=mtv-news", 'MTV News')}>MTV News</p>
                                        <p onClick = {()=> this.getNews("top-headlines?sources=newsweek", 'Newsweek')}>Newsweek</p>
                                        <p onClick = {()=> this.getNews("top-headlines?sources=news24", 'NEWS 24')}>NEWS 24</p>
                                        <p onClick = {()=> this.getNews("top-headlines?sources=the-economist", 'The Economist')}>The Economist</p>
                                        <p onClick = {()=> this.getNews("everything?domains=wsj.com", 'Wall Street Journal')}>Wall Street Journal</p>
                                        <p onClick = {()=> this.getNews("top-headlines?sources=the-washington-times", 'Washington Times')}>The Washington Times</p>
                                        <p onClick = {()=> this.getNews("top-headlines?sources=the-washington-post", 'Washington Post')}>The Washington Post</p>
                                        <p onClick = {()=> this.getNews("top-headlines?sources=time", 'TIME')}>TIME</p>
                                        <p onClick = {()=> this.getNews("top-headlines?sources=usa-today", 'USA Today')}>USA Today</p>
                                        <p onClick = {()=> this.getNews("top-headlines?sources=the-new-york-times", ' NY Times')}>New York Times</p>
                                    </div>
                                </div>

                            :
                                null
                            }
                            
                        </div>        
                
                    </div>
                        
                        {article}
                        
                        <div className = "spaceDiv"></div>
            </div>
        )
    }
}

              