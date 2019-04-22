import React from 'react'
import ReactPlayer from 'react-player'
import {withButton} from './ButtonProvider'

const Video2 = (props) => {

    
    function superman(){
       return props.showVideoMini(),
       props.splitScreen()
    }
    
    return(
 
    <div className = 'videoWrap2'>
    <div className = "newLife2">
        <h1 className = "channelName4" >{props.videoName}</h1>
        <div className = 'smallRed' onClick={() => superman()}></div>
    </div>
        <ReactPlayer className = 'reactPlayer' url={props.videoUrl ? props.videoUrl : 'https://www.youtube.com/watch?v=lrX6ktLg8WQ'} height='100%' width='100%' playing />
    </div>

    )
}

export default withButton(Video2)