import React from 'react'
import ReactLoading from "react-loading"

const Opening = ({type, color}) => {
    
  return(
    <div className = "loading">
    <ReactLoading type={type} color={color} height={'10%'} width={'17%'}/>
    </div>
  )
}




export default Opening