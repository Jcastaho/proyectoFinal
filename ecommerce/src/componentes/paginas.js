import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProductosLista } from "./productos"; 
import { Inicio } from "./inicio";
import { Login } from "./login";
import { ProductoDetalle } from './productos/productoDetalle';
import { AcercaDe } from "./acercade";

export const Paginas = () => {
    return(
        <section>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/inicio" element={<Inicio/>} />
                <Route path="/productos" element={<ProductosLista/>} />
                <Route path="/producto/:id" element={<ProductoDetalle/>} />
                <Route path="/acercade" element={<AcercaDe/>} />
            </Routes>
        </section>
    )
}