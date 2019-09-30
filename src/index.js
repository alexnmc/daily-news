import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style.css'
import ButtonProvider from './ButtonProvider'




ReactDOM.render(
        
        <ButtonProvider>
        <App/>
        </ButtonProvider>,
    
document.getElementById('root'))