import React, { useState, useEffect } from "react";
import Portada from "../../images/inicio.jpg"
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export const Inicio = () => {
    return (

        <div className="inicio">
            <Link to="/inicio">
                <h1 className="inicio1">Inicio</h1>
            </Link>
            <Link to="/productos">
                <h1 className="inicio1">Productos</h1>
            </Link>
            <img src={Portada} alt="" />
        </div>
    )
}