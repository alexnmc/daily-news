import React from 'react'
import {withButton} from './ButtonProvider'


const Button1 =(props)=>{

        return(
           <div className = "button2Wrap">
            <button  className = "button2" onClick = {props.handleToggle2 }>Country</button>
            { props.toggle2 ?
            
            <div className = "navbarWrap2">
                <div className = "navbar">
                    <p onClick = {()=> props.getNews2("top-headlines?country=ar", "Argentina")}>Argentina</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=au", "Australia")}>Australia</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=at", "Austria")}>Austria</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=be", "Belgium")}>Belgium</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=br", "Brazil")}>Brazil</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=bg", "Bulgaria")}>Bulgaria</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=ca", "Canada")}>Canada</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=cu", "Cuba")}>Cuba</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=cz", "Czech Republic")}>Czech Republic</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=co", "Colombia")}>Colombia</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=eg", "China")}>China</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=eg", "Egypt")}>Egypt</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=fr", "France")}>France</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=de", "Germany")}>Germany</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=gr", "Greece")}>Greece</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=hk", "Honk Kong")}>Honk Kong</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=hu", "Hungary")}>Hungary</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=it", "Italy")}>Italy</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=id", "Indonesia")}>Indonesia</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=ie", "Ireland")}>Ireland</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=in", "India")}>India</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=il", "Israel")}>Israel</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=jp", "Japan")}>Japan</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=kr", "Korea")}>Korea</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=lv", "Latvia")}>Latvia</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=lt", "Lithuania")}>Lithuania</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=my", "Malaysia")}>Malaysia</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=mx", "Mexico")}>Mexico</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=ma", "Morocco")}>Morocco</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=nl", "Netherlands")}>Netherlands</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=nz", "New Zealand")}>New Zealand</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=ng", "Nigeria")}>Nigeria</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=no", "Norway")}>Norway</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=pl", "Poland")}>Poland</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=pt", "Portugal")}>Portugal</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=ru", "Russia")}>Russia</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=ro", "Romania")}>Romania</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=sa", "Saudi Arabia")}>Saudi Arabia</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=rs", "Serbia")}>Serbia</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=sg", "Singapore")}>Singapore</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=sl", "Slovakia")}>Slovakia</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=si", "Slovenia")}>Slovenia</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=za", "South Africa")}>South Africa</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=se", "Sweeden")}>Sweeden</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=ch", "Swiss")}>Swiss</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=tw", "Taiwan")}>Taiwan</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=th", "Thailand")}>Thailand</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=tr", "Turkey")}>Turkey</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=ua", "Ukraine")}>Ukraine</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=ae", "United Arab Emirates")}>United Arab Emirates</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=gb", "United Kingdom")}>United Kingdom</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=us", "USA")}>USA</p>
                    <p onClick = {()=> props.getNews2("top-headlines?country=ve", "Venezuela")}>Venezuela</p>
                </div>
            </div>
        
                :

                null
            }
            </div>
        )
    }

               

export default  withButton(Button1)

