import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProductosLista } from "./productos"; 
import { Inicio } from "./inicio";

export const Paginas = () => {
    return(
        <section>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/productos" element={<ProductosLista/>} />
            </Routes>
        </section>
    )
}