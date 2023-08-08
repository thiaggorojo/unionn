import React from 'react'
import "./HomePage.css"
import dolar from "../img/dolar.png"
import tiempo from "../img/tiempo.png"
import Carrusels from '../Carrusels/Carrusels'
import { SiZcash } from "react-icons/si";

const HomePage = () => {
 

  return (
    <>
    
        <header>
        

            <div className='decreto'>
            
               
               
            </div>
           
          
        </header>
    
    <div className='container-general'>
        
          
        <div className='img-1'>
        <h1></h1>
      
        <Carrusels/>
        
{/* 
        /* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/PAMI-Logo.svg/1200px-PAMI-Logo.svg.png" alt="" />
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae error accusamus impedit sequi! Exercitationem quod recusandae eos natus dolore vero asperiores, magnam laborum obcaecati quam mollitia suscipit quis alias totam.</p>
        <button>Pedi tu Prestamo</button> */ }
        </div>
       
        
        <div className='img2'>
            <h1>
                ¿Quienes Somos?
            </h1>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil suscipit repudiandae dolores inventore explicabo similique doloribus enim iure quibusdam quisquam illum, corrupti modi, aliquam voluptate libero rerum? Error, quisquam fugiat.</p>
           <button>Pedi tu prestamo ya</button>
        </div>

        <div className='iconos'>
        <div className='img3'>
          <h3>Hasta $1.000.000</h3>
         <img src={dolar} alt="" />
       </div>
       <div>
        <h3>Tu prestamo al instante</h3>
        <img src={tiempo} alt="" />
       </div>
       <div className='banco'>
        <h3>Consulta por tu banco</h3>
        <img src={dolar} alt="" />
       </div>
      

       </div>
    



       







    </div>
    </>
  )
}

export default HomePage