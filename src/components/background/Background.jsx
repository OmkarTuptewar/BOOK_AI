import React from 'react'
import './Background.css'
import Navbar from '../navbar/Navbar'
import HeroSection from '../hero/Hero'
import Cards from '../cards.jsx/Cards'


const Background = () => {

  return (
    <>
     
        <div className="custom-wrapper">
      <div className="context">
    
        <Navbar/>
       
        <HeroSection/>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Cards/>
       
       
    </div>
  


<div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </div>
    
    </>
  )
}

export default Background
