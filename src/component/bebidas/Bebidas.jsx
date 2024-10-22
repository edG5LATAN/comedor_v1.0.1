import React, { useState } from 'react'
import Carrucel from '../carrucel/Carrucel';
import './Bebidas.css'


function Bebidas() {
  
  const [bebidas, setbebidas] = useState([
    {
      bebida: "amburgueza gigante",
      precio: "40$",
      imagen: "https://i.pinimg.com/originals/1a/77/ab/1a77abcb412e7ac22b262efbb539172e.jpg",
    },
    {
      bebida: "amburgueza peque;a",
      precio: "90$",
      imagen: "https://i.pinimg.com/originals/01/31/b4/0131b48bf26545ab2a07f1c5b56f54ed.jpg",
    },
    {
      bebida: "amburgueza media",
      precio: "70$",
      imagen: "https://i.pinimg.com/originals/56/e3/f5/56e3f5ca472d3f20693a42433ad88cec.jpg",
    },
    {
      bebida: "amburgueza suiza",
      precio: "60$",
      imagen: "https://i.pinimg.com/originals/56/ac/77/56ac77eb9e518b4449857b5dc532c89d.jpg",
    },
    {
      bebida: "amburgueza alemana",
      precio: "25$",
      imagen: "https://i.pinimg.com/originals/33/8e/b4/338eb4a04cf20fd03498c12b2d3d68b1.jpg",
    },
    ,
    {
      bebida: "amburgueza ",
      precio: "15$",
      imagen: "https://i.pinimg.com/originals/fa/74/6b/fa746b34f3bd2ee1ad59e1899a349e61.jpg",
    }
  ]);
  
  return (
    <div className='container bebidas_contenedor'>
      {bebidas.map((res) => {
            return (
              <Carrucel
                nombre={res.bebida}
                imagen={res.imagen}
                precio={res.precio}
              />
            );
          })}
      
    </div>
  )
}

export default Bebidas
