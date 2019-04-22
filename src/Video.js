import React from 'react'
import ReactPlayer from 'react-player'
import {withButton} from './ButtonProvider'

const Video = (props) => {

    return(
 <div className = 'video' >
    <div className = 'videoWrap' style = {props.style}>
        <ReactPlayer className = 'reactPlayer' url={props.videoUrl ? props.videoUrl : 'https://www.youtube.com/watch?v=lrX6ktLg8WQ'} height='100%' width='100%' playing />
    </div>
 </div>  
    )
}

export default withButton(Video)