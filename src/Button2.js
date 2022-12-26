import React  from 'react'
import {withButton} from './ButtonProvider'
import click from './Sound/click1.mp3'

const Button2 = (props) => {
    
    function playSound(){
        var sound = new Audio(click)
        //sound.play()
        props.handleToggle()
    }
    
    return (
            <div className = "transitions">
            <button className = " button1" onClick = {() => playSound()}>Watch</button>
            { props.toggle ?
            
                <div className = "navbarWrap" >
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=CKrbM_Ac3Jw', 'BBC News LIVE')}>BBC News<br></br> Live</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=pykpO5kQJ98', 'Euronews LIVE')}>Euronews<br></br> Live</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=gxG3pdKvlIs', 'France 24 LIVE')}>France 24 <br></br>Live</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=gxG3pdKvlIs', 'DW News LIVE')}>Deutsche Welle<br></br> Live</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=Zl3obqdVZ2o', 'FOX News LIVE')}>FOX News<br></br> Live</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=BNaCCk_MwFw&t=3s', 'RT News LIVE')}>RT News<br></br> Live</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=w_Ma8oQLmSM', 'ABC News Australia')}>ABC Australia <br></br>Live</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=w_Ma8oQLmSM', 'NBC-2 LIVE')}>NBC-2 News<br></br> Live</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=_yen6PGM4ak', 'ABC-7 SWFL LIVE')}>ABC-7 SWFL <br></br>Live</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=GEumHK0hfdo', 'Al Jazeera English LIVE')}>Al Jazeera<br></br>English Live</p>
                </div>

            :
                null
            }
            
            </div> 
        )
}
               

export default  withButton(Button2)