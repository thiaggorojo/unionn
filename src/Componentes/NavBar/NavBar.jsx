import React, { useState } from 'react'
import union from "../img/union.png"
import "../NavBar/NavBar.css"

/* const NavBar = () => {
    const [IsOpen,setIsOpen] = useState (false)
  return (
  <>
    <div className='navbar'>
  <div className="img-logo">
                    <img src={union} alt="" />
                    </div>
                    <div className="creditos">

                    <h1> UNION COOPERATIVA</h1>
                    </div>
                    import "./NavBar.css"
import React, {useState} from "react";
import logoda from "../img/logoda.png"*/


    
        const NavBar = () => {
        const [isOpen, setIsOpen] = useState(false)
            return(
                <div className="navbar">
                     
          

                    <div className="img-logo">
                    <img src={union} alt="" />
                    </div>
                    


                    <div className={`nav_items ${isOpen && "open"}`}>
                        <a href="#"> INICIO</a>
                        <a href="#"> NOSOTROS</a>
                        <a href="#"> BENEFICIOS</a>
                        <a href="#"> CONTACTO</a>
                    </div>
                    <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            )
}


export default NavBar