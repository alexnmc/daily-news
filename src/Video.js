import React from 'react'
import ReactPlayer from 'react-player'

const Video = () => {

    return(
 <div className = 'video'>
    <ReactPlayer className = 'reactPlayer' url='https://www.youtube.com/watch?v=lrX6ktLg8WQ' height='70%' width='70%' playing />
 </div>  
    )
}

export default Video