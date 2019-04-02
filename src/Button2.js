import React  from 'react'
import {withButton} from './ButtonProvider'


const Button2 =(props)=> {
    
    return(
            <div className = "transitions">
            <button className = " button1" onClick = {props.handleToggle}>Source</button>
            { props.toggle ?
            
                <div className = "navbarWrap" >
                    <div className = "navbar">
                        <p  className = 'axios' onClick = {()=> props.getNews("top-headlines?sources=axios", "Axios")}>Axios</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=abc-news", "ABC News")}>ABC </p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=bbc-news", "BBC News")}>BBC News</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=bbc-sport", 'BBC Sport')}>BBC Sport</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=cbs-news", 'CBS News')}>CBS</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=cnn","CNN")}>CNN</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=cnbc", "CNBC News")}>CNBC </p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=daily-mail", "Daily Mail News")}>Daily Mail</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=reuters", "Reuters")}>Reuters</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=financial-times", 'Financial Times')}>Financial Times</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=crypto-coins-news", 'Crypto Coins News')}>Crypto News</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=fox-news", 'FOX News')}>FOX News</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=espn", 'ESPN News')}>ESPN</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=entertainment-weekly", 'Entertaiment Weekly')}>Entertainment Weekly</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=business-insider", 'Businsess Insider')}>Business Insider</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=business-insider-uk", 'Business Insider UK')}>Business Insider UK</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=google-news" , 'Google News')}>Google News</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=nfl-news", 'NFL News')}>NFL News</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=independent", 'Independent')}>Independent</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=fox-sports", 'FOX Sports')}>FOX Sports</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=national-geographic", 'National Georgraphic')}>National Geographic</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=mtv-news", 'MTV News')}>MTV News</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=newsweek", 'Newsweek')}>Newsweek</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=news24", 'NEWS 24')}>NEWS 24</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=the-economist", 'The Economist')}>The Economist</p>
                        <p onClick = {()=> props.getNews("everything?domains=wsj.com", 'Wall Street Journal')}>Wall Street Journal</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=the-washington-times", 'Washington Times')}>The Washington Times</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=the-washington-post", 'Washington Post')}>The Washington Post</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=time", 'TIME')}>TIME</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=usa-today", 'USA Today')}>USA Today</p>
                        <p onClick = {()=> props.getNews("top-headlines?sources=the-new-york-times", ' NY Times')}>New York Times</p>
                    </div>
                </div>

            :
                null
            }
            
            </div> 
        )
    
}
               

export default  withButton(Button2)