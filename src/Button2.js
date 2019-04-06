import React  from 'react'
import {withButton} from './ButtonProvider'

// https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`
const Button2 = (props) => {
    
    return (
            <div className = "transitions">
            <button className = " button1" onClick = {props.handleToggle}>Source</button>
            { props.toggle ?
            
                <div className = "navbarWrap" style = {props.style}>
                    <div className = "navbar">
                        <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=lrX6ktLg8WQ', 'SKY NEWS LIVE')}>Sky News LIVE</p>
                        <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=5avbHxRppxo', 'EURONEWS LIVE')}>Euronews LIVE</p>
                        <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=hNJ5v-5vHk0', 'NBC-2 LIVE')}>NBC-2 News LIVE </p>
                        <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=IukZ7gOGPj8', 'ABC-7 SWFL LIVE')}>ABC-7 News LIVE</p>
                        <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=NvqKZHpKs-g', 'DW News LIVE')}>DW News LIVE</p>
                        
                        <p onClick = {()=> props.getNews("axios", "Axios")}>Axios</p>
                        <p onClick = {()=> props.getNews("abc-news", "ABC News")}>ABC </p>
                        <p onClick = {()=> props.getNews("bbc-news", "BBC News")}>BBC News</p>
                        <p onClick = {()=> props.getNews("bbc-sport", 'BBC Sport')}>BBC Sport</p>
                        <p onClick = {()=> props.getNews("cbs-news", 'CBS News')}>CBS</p>
                        <p onClick = {()=> props.getNews("cnn","CNN")}>CNN</p>
                        <p onClick = {()=> props.getNews("cnbc", "CNBC News")}>CNBC </p>
                        <p onClick = {()=> props.getNews("daily-mail", "Daily Mail News")}>Daily Mail</p>
                        <p onClick = {()=> props.getNews("reuters", "Reuters")}>Reuters</p>
                        <p onClick = {()=> props.getNews("financial-times", 'Financial Times')}>Financial Times</p>
                        <p onClick = {()=> props.getNews("crypto-coins-news", 'Crypto Coins News')}>Crypto News</p>
                        <p onClick = {()=> props.getNews("fox-news", 'FOX News')}>FOX News</p>
                        <p onClick = {()=> props.getNews("espn", 'ESPN News')}>ESPN</p>
                        <p onClick = {()=> props.getNews("entertainment-weekly", 'Entertaiment Weekly')}>Entertainment Weekly</p>
                        <p onClick = {()=> props.getNews("business-insider", 'Businsess Insider')}>Business Insider</p>
                        <p onClick = {()=> props.getNews("business-insider-uk", 'Business Insider UK')}>Business Insider UK</p>
                        <p onClick = {()=> props.getNews("google-news" , 'Google News')}>Google News</p>
                        <p onClick = {()=> props.getNews("nfl-news", 'NFL News')}>NFL News</p>
                        <p onClick = {()=> props.getNews("independent", 'Independent')}>Independent</p>
                        <p onClick = {()=> props.getNews("fox-sports", 'FOX Sports')}>FOX Sports</p>
                        <p onClick = {()=> props.getNews("national-geographic", 'National Georgraphic')}>National Geographic</p>
                        <p onClick = {()=> props.getNews("mtv-news", 'MTV News')}>MTV News</p>
                        <p onClick = {()=> props.getNews("newsweek", 'Newsweek')}>Newsweek</p>
                        <p onClick = {()=> props.getNews("news24", 'NEWS 24')}>NEWS 24</p>
                        <p onClick = {()=> props.getNews("the-economist", 'The Economist')}>The Economist</p>
                        <p onClick = {()=> props.getNews("the-wall-street-journal", 'Wall Street Journal')}>Wall Street Journal</p>
                        <p onClick = {()=> props.getNews("the-washington-times", 'Washington Times')}>The Washington Times</p>
                        <p onClick = {()=> props.getNews("the-washington-post", 'Washington Post')}>The Washington Post</p>
                        <p onClick = {()=> props.getNews("time", 'TIME')}>TIME</p>
                        <p onClick = {()=> props.getNews("usa-today", 'USA Today')}>USA Today</p>
                        <p onClick = {()=> props.getNews("the-new-york-times", ' NY Times')}>New York Times</p>
                    </div>
                </div>

            :
                null
            }
            
            </div> 
        )
}
               

export default  withButton(Button2)