import React from 'react'
import './Carrucel.css'


function Carrucel({nombre,imagen,precio}) {
  return (
    <>
      <div className="scroll-item ">
        <img src={imagen} alt="" />
        <div className='d-flex justify-content-center flex-column'>
          <h5 className='text-center '>{nombre}</h5>
          <p className='text-center'>precio <span>{precio}</span></p>
        </div>
      </div>
    </>
  )
}

export default Carrucel
