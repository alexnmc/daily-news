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
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=1tqcADsCx8s', 'Euronews LIVE')}>Euronews<br></br> Live</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=Af_7Gyfp8qI', 'France 24 LIVE')}>France 24 <br></br>Live</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=NvqKZHpKs-g', 'DW News LIVE')}>Deutsche Welle<br></br> Live</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=rHY8yG4mVzs', 'FOX News LIVE')}>FOX News<br></br> Live</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=IFAcqaNzNSc', 'RT News LIVE')}>RT News<br></br> Live</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=SyefnCmfvFA', 'ABC News Australia')}>ABC Australia <br></br>Live</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=tPeUHECNLKs', 'NBC-2 LIVE')}>NBC-2 News<br></br> Live</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=IukZ7gOGPj8', 'ABC-7 SWFL LIVE')}>ABC-7 SWFL <br></br>Live</p>
                    <p className = 'live' onClick = {()=> props.showVideo('https://www.youtube.com/watch?v=jL8uDJJBjMA', 'Al Jazeera English LIVE')}>Al Jazeera<br></br>English Live</p>
                </div>

            :
                null
            }
            
            </div> 
        )
}
               

export default  withButton(Button2)