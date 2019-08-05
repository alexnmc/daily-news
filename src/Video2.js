import React from 'react'
import ReactPlayer from 'react-player'
import {withButton} from './ButtonProvider'

const Video2 = (props) => {

    
    function splitScreen2(){
       props.showVideoMini()
       props.splitScreen()
    }
    
    return(
 
    <div className = 'videoWrap2'>
    <div className = "channelName7">
        <h1 className = "channelName4" >{props.videoName}</h1>
        <div className = 'fullScreen' onClick={() => splitScreen2()} style = {props.toggle ? {visibility: 'hidden'} : {visibility: 'visible'}}></div>
    </div>
        <ReactPlayer className = 'reactPlayer' url={props.videoUrl ? props.videoUrl : 'https://www.youtube.com/watch?v=CKrbM_Ac3Jw'} height='100%' width='100%' playing />
    </div>

    )
}

export default withButton(Video2)