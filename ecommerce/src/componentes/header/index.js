import React, { useState, useEffect } from "react";
import Nike from "../../images/Nike.jpg";
import Perfil1 from "../../images/perfil.png";
import Perfil2 from "../../images/cerrarsesion.png";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const Header = () => {
    const [mostrarPerfil, setMostrarPerfil] = useState(false);

    useEffect(() => {
        const id = cookies.get("id");
        if (id) {
            setMostrarPerfil(false);
        } else {
            setMostrarPerfil(true);
        }
    }, []);

    return (
        <header>
            <Link to="/inicio">
                <div className="logo">
                    <img src={Nike} alt="logo" width="150" />
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/inicio">INICIO</Link>
                </li>
                <li>
                    <Link to="/productos">PRODUCTO</Link>
                </li>
            </ul>
            <Link to="/login">
                <div className="perfil">
                    {mostrarPerfil ? (
                        <img src={Perfil1} alt="user" width="45" />
                    ) : (
                        <img src={Perfil2} alt="user" width="45" />
                    )}
                </div>
            </Link>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
            </div>
        </header>
    )
}
