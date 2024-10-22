import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Scrol from "../scrool/Scrol";

function Header() {
  return (
    <div className="container">
      <div className="header_contenedor">
        <div className="header_glases">
          <h2 className="fw-bolder fs-1">Comedor Koli</h2>
          <p className="fw-bolder fs-3">
            Comida bufet variedad de bebidas y postres
          </p>
        </div>
      </div>
      <ul class="nav nav-underline justify-content-center pt-2 pb-2">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to={"/"}>
            Menu
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/bebidas"}>
            Bebidas
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/postres"}>
            Postres
          </Link>
        </li>
        <li class="nav-item">
          <Scrol />
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">
            EDTecnology
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
