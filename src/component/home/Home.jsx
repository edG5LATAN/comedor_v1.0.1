import React, { useState } from "react";
import Carrucel from "../carrucel/Carrucel";
import "./Home.css";

function Home() {
  const [comidas, setcomidas] = useState([
    {
      comida: "pizza",
      precio: "40$",
      imagen: "https://i.pinimg.com/originals/3f/4f/ed/3f4fed37bd668c70f2cfd083e912bb80.jpg",
    },
    {
      comida: "spagguetis",
      precio: "90$",
      imagen: "https://i.pinimg.com/originals/5d/d9/fa/5dd9fa91c7ae16cdb77bf8f6a25c660c.jpg",
    },
    {
      comida: "pollo frito",
      precio: "70$",
      imagen: "https://i.pinimg.com/originals/34/e7/64/34e76481ba1dd68de6e0c293428c33f3.jpg",
    },
    {
      comida: "amburgueza suiza",
      precio: "60$",
      imagen: "https://i.pinimg.com/originals/71/54/ad/7154ad74c769e074cb521ee8dad0f49f.jpg",
    },
    {
      comida: "amburgueza suiza",
      precio: "25$",
      imagen: "https://i.pinimg.com/originals/f4/f5/55/f4f5556ab6944ec047652f392144a500.jpg",
    },
    {
      comida: "amburgueza ",
      precio: "25$",
      imagen: "https://i.pinimg.com/originals/b0/d3/0c/b0d30c1cc280e7b5d4da4f230698a293.jpg",
    }
  ]);

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

  const [postres, setpostres] = useState([
    {
      postre: "amburgueza gigante",
      precio: "40$",
      imagen: "https://i.pinimg.com/originals/3b/6b/16/3b6b16ed7e12d607b92cb3aa59b27c47.jpg",
    },
    {
      postre: "amburgueza peque;a",
      precio: "90$",
      imagen: "https://i.pinimg.com/originals/0e/85/9c/0e859cddd5dcb544173e257bd839ed29.jpg",
    },
    {
      postre: "amburgueza media",
      precio: "70$",
      imagen: "https://i.pinimg.com/originals/fb/cf/d0/fbcfd0cfc0a656e7c36432c392e6f48e.png",
    },
    {
      postre: "amburgueza suiza",
      precio: "60$",
      imagen: "https://i.pinimg.com/originals/4e/43/7e/4e437ec10983b4d32df02ab989f0189d.jpg",
    },
    {
      postre: "amburgueza alemana",
      precio: "25$",
      imagen: "https://i.pinimg.com/originals/8a/fb/6a/8afb6a1bd7bb655ada214ce0c16d0c98.jpg",
    },
    {
      postre: "amburgueza suiza",
      precio: "45$",
      imagen: "https://i.pinimg.com/originals/dd/05/34/dd053445690c5f871dd24052d74d2dd2.jpg",
    }
  ]);



  return (
    <div className="">
      <div className="pb-5">
        <h1 className="text-center">Comidas</h1>
        <div className="container home_comidas">
          {comidas.map((res) => {
            return (
              <Carrucel
                nombre={res.comida}
                imagen={res.imagen}
                precio={res.precio}
              />
            );
          })}
        </div>
      </div>

      <div className="pb-5">
        <h1 className="text-center">Bebidas</h1>
        <div className="container home_comidas">
          {bebidas.map((res) => {
            return (
              <Carrucel
                nombre={res.bedida}
                imagen={res.imagen}
                precio={res.precio}
              />
            );
          })}
        </div>
      </div>

      <div className="pb-5">
        <h1 className="text-center">Postres</h1>
        <div className="container home_comidas">
          {postres.map((res) => {
            return (
              <Carrucel
                nombre={res.comida}
                imagen={res.imagen}
                precio={res.precio}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
