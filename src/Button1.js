import React from 'react'
import {withButton} from './ButtonProvider'


    const Button1 = (props) => {

        return (
           <div className = "button2Wrap">
            <button  className = "button2" onClick = {props.handleToggle2 }>Read</button>
            { props.toggle2 ?
            
                <div className = "navbarWrap2">
                    <p className = 'topHead'>Top headlines from:</p>
                    <p className = 'argentina' onClick = {()=> props.getNews2("ar", "Argentina")}>Argentina</p>
                    <p onClick = {()=> props.getNews2("au", "Australia")}>Australia</p>
                    <p onClick = {()=> props.getNews2("at", "Austria")}>Austria</p>
                    <p onClick = {()=> props.getNews2("be", "Belgium")}>Belgium</p>
                    <p onClick = {()=> props.getNews2("br", "Brazil")}>Brazil</p>
                    <p onClick = {()=> props.getNews2("bg", "Bulgaria")}>Bulgaria</p>
                    <p onClick = {()=> props.getNews2("ca", "Canada")}>Canada</p>
                    <p onClick = {()=> props.getNews2("cu", "Cuba")}>Cuba</p>
                    <p onClick = {()=> props.getNews2("cz", "Czech Republic")}>Czech Republic</p>
                    <p onClick = {()=> props.getNews2("co", "Colombia")}>Colombia</p>
                    <p onClick = {()=> props.getNews2("cn", "China")}>China</p>
                    <p onClick = {()=> props.getNews2("eg", "Egypt")}>Egypt</p>
                    <p onClick = {()=> props.getNews2("fr", "France")}>France</p>
                    <p onClick = {()=> props.getNews2("de", "Germany")}>Germany</p>
                    <p onClick = {()=> props.getNews2("gr", "Greece")}>Greece</p>
                    <p onClick = {()=> props.getNews2("hk", "Honk Kong")}>Honk Kong</p>
                    <p onClick = {()=> props.getNews2("hu", "Hungary")}>Hungary</p>
                    <p onClick = {()=> props.getNews2("it", "Italy")}>Italy</p>
                    <p onClick = {()=> props.getNews2("id", "Indonesia")}>Indonesia</p>
                    <p onClick = {()=> props.getNews2("ie", "Ireland")}>Ireland</p>
                    <p onClick = {()=> props.getNews2("in", "India")}>India</p>
                    <p onClick = {()=> props.getNews2("il", "Israel")}>Israel</p>
                    <p onClick = {()=> props.getNews2("jp", "Japan")}>Japan</p>
                    <p onClick = {()=> props.getNews2("kr", "Korea")}>Korea</p>
                    <p onClick = {()=> props.getNews2("lv", "Latvia")}>Latvia</p>
                    <p onClick = {()=> props.getNews2("lt", "Lithuania")}>Lithuania</p>
                    <p onClick = {()=> props.getNews2("my", "Malaysia")}>Malaysia</p>
                    <p onClick = {()=> props.getNews2("mx", "Mexico")}>Mexico</p>
                    <p onClick = {()=> props.getNews2("ma", "Morocco")}>Morocco</p>
                    <p onClick = {()=> props.getNews2("nl", "Netherlands")}>Netherlands</p>
                    <p onClick = {()=> props.getNews2("nz", "New Zealand")}>New Zealand</p>
                    <p onClick = {()=> props.getNews2("ng", "Nigeria")}>Nigeria</p>
                    <p onClick = {()=> props.getNews2("no", "Norway")}>Norway</p>
                    <p onClick = {()=> props.getNews2("pl", "Poland")}>Poland</p>
                    <p onClick = {()=> props.getNews2("pt", "Portugal")}>Portugal</p>
                    <p onClick = {()=> props.getNews2("ru", "Russia")}>Russia</p>
                    <p onClick = {()=> props.getNews2("ro", "Romania")}>Romania</p>
                    <p onClick = {()=> props.getNews2("sa", "Saudi Arabia")}>Saudi Arabia</p>
                    <p onClick = {()=> props.getNews2("rs", "Serbia")}>Serbia</p>
                    <p onClick = {()=> props.getNews2("sg", "Singapore")}>Singapore</p>
                    <p onClick = {()=> props.getNews2("sl", "Slovakia")}>Slovakia</p>
                    <p onClick = {()=> props.getNews2("si", "Slovenia")}>Slovenia</p>
                    <p onClick = {()=> props.getNews2("za", "South Africa")}>South Africa</p>
                    <p onClick = {()=> props.getNews2("se", "Sweeden")}>Sweeden</p>
                    <p onClick = {()=> props.getNews2("ch", "Swiss")}>Swiss</p>
                    <p onClick = {()=> props.getNews2("tw", "Taiwan")}>Taiwan</p>
                    <p onClick = {()=> props.getNews2("th", "Thailand")}>Thailand</p>
                    <p onClick = {()=> props.getNews2("tr", "Turkey")}>Turkey</p>
                    <p onClick = {()=> props.getNews2("ua", "Ukraine")}>Ukraine</p>
                    <p onClick = {()=> props.getNews2("ae", "United Arab Emirates")}>United Arab Emirates</p>
                    <p onClick = {()=> props.getNews2("gb", "United Kingdom")}>United Kingdom</p>
                    <p onClick = {()=> props.getNews2("us", "USA")}>USA</p>
                    <p onClick = {()=> props.getNews2("ve", "Venezuela")}>Venezuela</p>
                <p className = 'topHead2'></p>
                    <p onClick = {()=> props.getNews("abc-news", "ABC News")}>ABC </p>
                    <p onClick = {()=> props.getNews("axios", "Axios")}>Axios</p>
                    <p onClick = {()=> props.getNews("bbc-news", "BBC News")}>BBC News</p>
                    <p onClick = {()=> props.getNews("bbc-sport", 'BBC Sport')}>BBC Sport</p>
                    <p onClick = {()=> props.getNews("business-insider", 'Businsess Insider')}>Business Insider</p>
                    <p onClick = {()=> props.getNews("business-insider-uk", 'Business Insider UK')}>Business Insider UK</p>
                    <p onClick = {()=> props.getNews("cbs-news", 'CBS News')}>CBS</p>
                    <p onClick = {()=> props.getNews("cnn","CNN")}>CNN</p>
                    <p onClick = {()=> props.getNews("cnbc", "CNBC News")}>CNBC </p>
                    <p onClick = {()=> props.getNews("crypto-coins-news", 'Crypto Coins News')}>Crypto News</p>
                    <p onClick = {()=> props.getNews("daily-mail", "Daily Mail News")}>Daily Mail</p>
                    <p onClick = {()=> props.getNews("espn", 'ESPN News')}>ESPN</p>
                    <p onClick = {()=> props.getNews("entertainment-weekly", 'Entertaiment Weekly')}>Entertainment Weekly</p>
                    <p onClick = {()=> props.getNews("financial-times", 'Financial Times')}>Financial Times</p>
                    <p onClick = {()=> props.getNews("fox-news", 'FOX News')}>FOX News</p>
                    <p onClick = {()=> props.getNews("fox-sports", 'FOX Sports')}>FOX Sports</p>
                    <p onClick = {()=> props.getNews("google-news" , 'Google News')}>Google News</p>
                    <p onClick = {()=> props.getNews("independent", 'Independent')}>Independent</p>
                    <p onClick = {()=> props.getNews("mtv-news", 'MTV News')}>MTV News</p>
                    <p onClick = {()=> props.getNews("the-new-york-times", ' NY Times')}>New York Times</p>
                    <p onClick = {()=> props.getNews("nfl-news", 'NFL News')}>NFL News</p>
                    <p onClick = {()=> props.getNews("national-geographic", 'National Georgraphic')}>National Geographic</p>
                    <p onClick = {()=> props.getNews("newsweek", 'Newsweek')}>Newsweek</p>
                    <p onClick = {()=> props.getNews("news24", 'NEWS 24')}>NEWS 24</p>
                    <p onClick = {()=> props.getNews("reuters", "Reuters")}>Reuters</p>
                    <p onClick = {()=> props.getNews("the-economist", 'The Economist')}>The Economist</p>
                    <p onClick = {()=> props.getNews("the-washington-times", 'Washington Times')}>The Washington Times</p>
                    <p onClick = {()=> props.getNews("the-washington-post", 'Washington Post')}>The Washington Post</p>
                    <p onClick = {()=> props.getNews("time", 'TIME')}>TIME</p>
                    <p onClick = {()=> props.getNews("usa-today", 'USA Today')}>USA Today</p>
                    <p onClick = {()=> props.getNews("the-wall-street-journal", 'Wall Street Journal')}>Wall Street Journal</p>
                </div>
        
            :
                null
            }
            </div>
        )
    }

               

export default  withButton(Button1)

