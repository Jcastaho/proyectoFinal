import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProductosLista } from "./productos"; 
import { Inicio } from "./inicio";
import { Login } from "./login";

export const Paginas = () => {
    return(
        <section>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/inicio" element={<Inicio/>} />
                <Route path="/productos" element={<ProductosLista/>} />
            </Routes>
        </section>
    )
}