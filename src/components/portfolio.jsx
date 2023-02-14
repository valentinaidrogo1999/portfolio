import React from 'react';
import Decoraciones from "../img/decoraciones.png"
import Criptos from "../img/criptos.png"
import Pokedex from "../img/pokedex.png"
import Tetris from "../img/tetris.png"
import Navegation from "../img/rotating.png"
import Sebujcha from "../img/sebujcha.png"
import "../components/styles/portfolio.css"
import Contact from "../components/Contact"

 


function proyectos() {
  return (
    <>

    <div className='container'>
        <div className='carta'>
         
          <div className='Lado frente'>
           <h1 className='proyec'>Proyectos</h1>
            
          </div>
          
          <div className='Lado atras'></div>
        </div>

      </div>
    <div className='slider'>
      
      <ul>
        <li> 
          <div className='center'>
            <div className='outer bootton'>
          
             <a href="https://github.com/valentinaidrogo1999/testing-repo" target="blank"><button> Github</button></a>
             <span></span>
             <span></span>
           </div>
         </div>
          <a href="https://testing-repo-tp2a.vercel.app/" target="blank"><img src={Decoraciones} alt=""/></a> 
        </li>

        <li> 
        <div className='center'>
            <div className='outer bootton'>
          
              <a href="https://github.com/valentinaidrogo1999/DashBoard" target="blank"><button> Github</button></a>
              <span></span>
              <span></span>
            </div>
          </div>
          <a href="https://dash-board-azure.vercel.app/" target="blank"><img src={Criptos} alt=""/></a>
        </li>


        <li>
          <div className='center'>
            <div className='outer bootton'>
              <a href="https://github.com/valentinaidrogo1999/pokedex" target="blank"><button> Github</button></a>
              <span></span>
              <span></span>
            </div>
          </div>
           <a href="https://valentinaidrogo1999.github.io/pokedex/"><img src={Pokedex} alt=""/></a>
           
        </li>

        <li>
         <div className='center'>
            <div className='outer bootton'>
          
              <a href="https://github.com/valentinaidrogo1999/juegos-de-tetris" target="blank"><button> Github</button></a>
              <span></span>
              <span></span>
            </div>
          </div>
          
           <a href="https://valentinaidrogo1999.github.io/juegos-de-tetris/" target="blank"><img src={Tetris} alt=""/></a>
        </li>

        <li> 
         <div className='center'>
            <div className='outer bootton'>
          
              <a href="https://github.com/valentinaidrogo1999/sabujcha" target="blank"><button> Github</button></a>
              <span></span>
              <span></span>
            </div>
          </div>
          
          <a href="https://valentinaidrogo1999.github.io/sabujcha/" target="blank"><img src={Sebujcha} alt=""/></a>
        </li>

        <li> 
        <div className='center'>
            <div className='outer bootton'>
          
              <a href="https://github.com/valentinaidrogo1999/mobile-tab-navigation" target="blank"><button> Github</button></a>
              <span></span>
              <span></span>
            </div>
         </div>
          
          <a href="https://valentinaidrogo1999.github.io/mobile-tab-navigation/"><img src={Navegation} alt=""/></a>
        </li>
      </ul>
      </div>
      <Contact/>
      </>
  )
}

export default proyectos

 
      