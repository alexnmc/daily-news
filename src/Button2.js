import React  from 'react'
import {withButton} from './ButtonProvider'

// https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`
const Button2 = (props) => {
   
    return (
            <div className = "transitions">
            <button className = " button1" onClick = {props.handleToggle}>Watch</button>
            { props.toggle ?
            
                <div className = "navbarWrap" >
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=lrX6ktLg8WQ', 'SKY NEWS LIVE')}>Sky News LIVE</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=7t04Mv8_5sM&feature=player_embedded_uturn', 'EURONEWS LIVE')}>Euronews LIVE</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=O8yyiEfHIRA', 'France 24 LIVE')}>France 24 LIVE</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=NvqKZHpKs-g', 'DW News LIVE')}>DW News LIVE</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=9iQ17RA-6r0', 'FOX News LIVE')}>FOX News LIVE </p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=IFAcqaNzNSc', 'RT News LIVE')}>RT News LIVE</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=rQSwh3bgs5k', 'ABC News Australia')}>ABC Australia LIVE</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=2XvDVYmoVeE', 'NBC-2 LIVE')}>NBC-2 News LIVE </p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=IukZ7gOGPj8', 'ABC-7 SWFL LIVE')}>ABC-7 SWFL LIVE</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=qIZbVkgTA7M', 'Al Jazeera English LIVE')}>Al Jazeera English LIVE</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=hejIEb0FPBc', 'Newsmax TV LIVE')}>Newsmax TV LIVE</p>
                </div>

            :
                null
            }
            
            </div> 
        )
}
               

export default  withButton(Button2)