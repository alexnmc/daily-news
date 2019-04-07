import React from 'react'
import ReactPlayer from 'react-player'
import {withButton} from './ButtonProvider'

const Video = (props) => {

    return(
 <div className = 'video' style = {props.style}>
    <div className = 'videoWrap'>
        <ReactPlayer className = 'reactPlayer' url={props.videoUrl} height='100%' width='100%' playing />
    </div>
 </div>  
    )
}

export default withButton(Video)