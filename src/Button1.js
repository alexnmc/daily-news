import React from 'react'
import {withButton} from './ButtonProvider'


    const Button1 = (props) => {

        return (
           <div className = "button2Wrap">
            <button  className = "button2" onClick = {props.handleToggle2 }>Country</button>
            { props.toggle2 ?
            
                <div className = "navbarWrap2">
                    <div className = "navbar">
                        <p onClick = {()=> props.getNews2("ar", "Argentina")}>Argentina</p>
                        <p onClick = {()=> props.getNews2("au", "Australia")}>Australia</p>
                        <p onClick = {()=> props.getNews2("at", "Austria")}>Austria</p>
                        <p onClick = {()=> props.getNews2("be", "Belgium")}>Belgium</p>
                        <p onClick = {()=> props.getNews2("br", "Brazil")}>Brazil</p>
                        <p onClick = {()=> props.getNews2("bg", "Bulgaria")}>Bulgaria</p>
                        <p onClick = {()=> props.getNews2("ca", "Canada")}>Canada</p>
                        <p onClick = {()=> props.getNews2("cu", "Cuba")}>Cuba</p>
                        <p onClick = {()=> props.getNews2("cz", "Czech Republic")}>Czech Republic</p>
                        <p onClick = {()=> props.getNews2("co", "Colombia")}>Colombia</p>
                        <p onClick = {()=> props.getNews2("cn", "China")}>China</p>
                        <p onClick = {()=> props.getNews2("eg", "Egypt")}>Egypt</p>
                        <p onClick = {()=> props.getNews2("fr", "France")}>France</p>
                        <p onClick = {()=> props.getNews2("de", "Germany")}>Germany</p>
                        <p onClick = {()=> props.getNews2("gr", "Greece")}>Greece</p>
                        <p onClick = {()=> props.getNews2("hk", "Honk Kong")}>Honk Kong</p>
                        <p onClick = {()=> props.getNews2("hu", "Hungary")}>Hungary</p>
                        <p onClick = {()=> props.getNews2("it", "Italy")}>Italy</p>
                        <p onClick = {()=> props.getNews2("id", "Indonesia")}>Indonesia</p>
                        <p onClick = {()=> props.getNews2("ie", "Ireland")}>Ireland</p>
                        <p onClick = {()=> props.getNews2("in", "India")}>India</p>
                        <p onClick = {()=> props.getNews2("il", "Israel")}>Israel</p>
                        <p onClick = {()=> props.getNews2("jp", "Japan")}>Japan</p>
                        <p onClick = {()=> props.getNews2("kr", "Korea")}>Korea</p>
                        <p onClick = {()=> props.getNews2("lv", "Latvia")}>Latvia</p>
                        <p onClick = {()=> props.getNews2("lt", "Lithuania")}>Lithuania</p>
                        <p onClick = {()=> props.getNews2("my", "Malaysia")}>Malaysia</p>
                        <p onClick = {()=> props.getNews2("mx", "Mexico")}>Mexico</p>
                        <p onClick = {()=> props.getNews2("ma", "Morocco")}>Morocco</p>
                        <p onClick = {()=> props.getNews2("nl", "Netherlands")}>Netherlands</p>
                        <p onClick = {()=> props.getNews2("nz", "New Zealand")}>New Zealand</p>
                        <p onClick = {()=> props.getNews2("ng", "Nigeria")}>Nigeria</p>
                        <p onClick = {()=> props.getNews2("no", "Norway")}>Norway</p>
                        <p onClick = {()=> props.getNews2("pl", "Poland")}>Poland</p>
                        <p onClick = {()=> props.getNews2("pt", "Portugal")}>Portugal</p>
                        <p onClick = {()=> props.getNews2("ru", "Russia")}>Russia</p>
                        <p onClick = {()=> props.getNews2("ro", "Romania")}>Romania</p>
                        <p onClick = {()=> props.getNews2("sa", "Saudi Arabia")}>Saudi Arabia</p>
                        <p onClick = {()=> props.getNews2("rs", "Serbia")}>Serbia</p>
                        <p onClick = {()=> props.getNews2("sg", "Singapore")}>Singapore</p>
                        <p onClick = {()=> props.getNews2("sl", "Slovakia")}>Slovakia</p>
                        <p onClick = {()=> props.getNews2("si", "Slovenia")}>Slovenia</p>
                        <p onClick = {()=> props.getNews2("za", "South Africa")}>South Africa</p>
                        <p onClick = {()=> props.getNews2("se", "Sweeden")}>Sweeden</p>
                        <p onClick = {()=> props.getNews2("ch", "Swiss")}>Swiss</p>
                        <p onClick = {()=> props.getNews2("tw", "Taiwan")}>Taiwan</p>
                        <p onClick = {()=> props.getNews2("th", "Thailand")}>Thailand</p>
                        <p onClick = {()=> props.getNews2("tr", "Turkey")}>Turkey</p>
                        <p onClick = {()=> props.getNews2("ua", "Ukraine")}>Ukraine</p>
                        <p onClick = {()=> props.getNews2("ae", "United Arab Emirates")}>United Arab Emirates</p>
                        <p onClick = {()=> props.getNews2("gb", "United Kingdom")}>United Kingdom</p>
                        <p onClick = {()=> props.getNews2("us", "USA")}>USA</p>
                        <p onClick = {()=> props.getNews2("ve", "Venezuela")}>Venezuela</p>
                    </div>
                </div>
        
            :

                null
            }
            </div>
        )
    }

               

export default  withButton(Button1)

