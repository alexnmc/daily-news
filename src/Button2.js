import React  from 'react'
import {withButton} from './ButtonProvider'

// https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`
const Button2 = (props) => {
   
    return (
            <div className = "transitions">
            <button className = " button1" onClick = {props.handleToggle}>Watch</button>
            { props.toggle ?
            
                <div className = "navbarWrap" >
                    <p className = 'live1' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=lrX6ktLg8WQ', 'SKY NEWS LIVE')}>Sky News</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=SM29tFvd_VM', 'EURONEWS LIVE')}>Euronews</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=d3_gK9MrXo8', 'France 24 LIVE')}>France 24</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=NvqKZHpKs-g', 'DW News LIVE')}>DW News</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=9iQ17RA-6r0', 'FOX News LIVE')}>FOX News</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=IFAcqaNzNSc', 'RT News LIVE')}>RT News</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=BbDF_GXBmGc', 'ABC News Australia')}>ABC Australia</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=2XvDVYmoVeE', 'NBC-2 LIVE')}>NBC-2 News</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=IukZ7gOGPj8', 'ABC-7 SWFL LIVE')}>ABC-7 SWFL</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=jL8uDJJBjMA', 'Al Jazeera English LIVE')}>Al Jazeera English</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=Zfu4bb2ZTlM', 'Newsmax TV LIVE')}>Newsmax TV</p>
                </div>

            :
                null
            }
            
            </div> 
        )
}
               

export default  withButton(Button2)