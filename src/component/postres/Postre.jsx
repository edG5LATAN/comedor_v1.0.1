import React, { useState } from 'react'
import './Postre.css'
import Carrucel from '../carrucel/Carrucel'


function Postre() {

   const [postres, setpostres] = useState([
    {
      postre: "pudin",
      precio: "40$",
      imagen: "https://i.pinimg.com/originals/3b/6b/16/3b6b16ed7e12d607b92cb3aa59b27c47.jpg",
    },
    {
      postre: "tarta",
      precio: "90$",
      imagen: "https://i.pinimg.com/originals/0e/85/9c/0e859cddd5dcb544173e257bd839ed29.jpg",
    },
    {
      postre: "fresipudin",
      precio: "70$",
      imagen: "https://i.pinimg.com/originals/fb/cf/d0/fbcfd0cfc0a656e7c36432c392e6f48e.png",
    },
    {
      postre: "pastelitos",
      precio: "60$",
      imagen: "https://i.pinimg.com/originals/4e/43/7e/4e437ec10983b4d32df02ab989f0189d.jpg",
    },
    {
      postre: "donas",
      precio: "25$",
      imagen: "https://i.pinimg.com/originals/8a/fb/6a/8afb6a1bd7bb655ada214ce0c16d0c98.jpg",
    },
    {
      postre: "quequito",
      precio: "45$",
      imagen: "https://i.pinimg.com/originals/dd/05/34/dd053445690c5f871dd24052d74d2dd2.jpg",
    }
  ]);

  return (
    <div className='container postre_contenedor'>
      {postres.map((res) => {
            return (
              <Carrucel
                nombre={res.postre}
                imagen={res.imagen}
                precio={res.precio}
              />
            );
          })}
      
    </div>
  )
}

export default Postre
