import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {DataContext} from "../../context/dataprovider"


export const ProductoItem = ({
    id,
    title,
    price,
    image,
    category
}) => {

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;
    return (
        <div className="producto">
            <a href="#">
                <div className="producto__img">
                    <img src={image} alt={title} />
                </div>
            </a>
            <div className="producto__footer">
                <hi> {title} </hi>
                <p> {category} </p>
                <p className="price">${price}</p>
            </div>
            <div className="buttom">
                <button className="btn" onClick={() => addCarrito(id)}>
                    Añadir al carrito
                </button>
                <div>
                    <a href="#" className="btn">Vista</a>
                </div>
            </div>
        </div>
    )
}