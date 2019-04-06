import React from 'react'
import ReactPlayer from 'react-player'

const Video = () => {

    return(
 <div className = 'video'>
    <ReactPlayer url='https://www.youtube.com/watch?v=lrX6ktLg8WQ' playing />
 </div>  
    )
}

export default Video