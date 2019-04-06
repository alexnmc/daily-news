import React from 'react'
import ReactPlayer from 'react-player'

const Video = () => {

    return(
 <div className = 'video'>
    <ReactPlayer url='https://www.youtube.com/watch?v=lrX6ktLg8WQ' height='50%' width='60%' playing />
 </div>  
    )
}

export default Video