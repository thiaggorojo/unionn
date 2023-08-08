import React from 'react'
import './Footer.css'
import union from "../img/union.png"
import { BsWhatsapp, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { BiCaretRight } from "react-icons/bi";





const Footer = () => {



return (

    <div className='Footer-Container'>

        <div className='Contenedor1'>
            <h1>SEGUINOS</h1>
            
            <div className='ContenedorHijo1'>
                <span> <BsWhatsapp/> 113681-2916</span>
                <span> <BsInstagram/> Union.creditos </span>
                <span> <BsFacebook/> Creditos union</span>

            </div>
        </div>
        <div className='contenedor2'>

            <div className='logo'>
               <img src={union} alt="" />

            </div>



        </div>

        <div className='contenedor3'>
           
       <div className='lista'>

       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.987821751669!2d-58.378656923544824!3d-34.60446945753915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacdc06abb5b%3A0x3ea578eb713ad740!2sSarmiento%20663%2C%20C1041%20San%20Nicolas%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1691526698291!5m2!1ses-419!2sar" ></iframe>



       </div>

        </div>
    </div>


)
}

export default Footer