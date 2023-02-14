import React from 'react'
import "../components/styles/contact.css"
import  LinkedIn  from '../img/linkedin.png'
import  Github  from '../img/github.png'
import  Email from '../img/gmail.png'


function Contact() {
  return (
    <>
    
    <div className='iconos'>
      <h3>contactos</h3>
      
      <div style={{ display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>

      <div>
        <a href="https://www.linkedin.com/in/valentina-idrogo-b7a51a258/" target="_blank"><img src={LinkedIn} alt="" /></a> 
        <p>LinkedIn</p>
      </div>

      <div>
       <a href="https://github.com/valentinaidrogo1999" target="_blank"><img src={Github } alt="" /></a> 
        <p>Github </p>
      </div>

      <div>
        <a href="mailto:valentinaidrogo1999@gmail.com" target="_blank"><img src={Email} alt="" /></a>
        <p>Gmail</p>
      </div>
      </div>
    
    </div>
    
    </>
  )
}

export default Contact
