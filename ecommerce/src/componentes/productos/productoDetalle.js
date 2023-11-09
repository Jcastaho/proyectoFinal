import React, { useContext, useState, useEffect } from 'react';
import {DataContext} from "../../context/dataprovider";
import {useParams} from "react-router-dom";
import { ProductoItem } from './productoitem';

export const ProductoDetalle = () => {

    const value = useContext(DataContext)
    const [productos] = value.productos;
    const addCarrito = value.addCarrito;
    const [detalle, setDetalle] = useState([]);
    const params = useParams();
    let item = 0;
    
    useEffect(() =>{
        productos.forEach(producto => {
            item = 0;
            if(producto.id === parseInt(params.id)){
                setDetalle(producto)

            }
        });
    },[params.id, productos])


  return (
    <>
        {
            <div className='detalles'>
                <h2>{detalle.title}</h2>
                <p className='price'>${detalle.price}</p>
                <div className='grid'>
                    <p className='nuevo'>Nuevo</p>
                    <div className='size'>
                        <select placeholder='Tamaño'>
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="1">5</option>
                            <option value="1">6</option>
                            <option value="1">7</option>
                            <option value="1">8</option>
                            <option value="1">9</option>
                        </select>
                        <p>Tamaño</p>
                    </div>
                </div>
                <button onClick={()=> addCarrito(detalle.id)}>Añadir al carrito</button>
                <img src={detalle.image} alt={detalle.title}/>
                <div className='description'>
                    <p><b>Descripcion:</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <br/><br/><br/><br/>
                </div>
            </div>
        }

        <h2 className='relacionado'>Productos Relacionados</h2>
        <div className="productos">
            {productos.map((producto) => {
                if((item < 6)&&(detalle.category === producto.category)){
                    item++;
                    return <ProductoItem 
                    key={producto.id}
                    id={producto.id}
                    title={producto.title}
                    price={producto.price}
                    image={producto.image}
                    category={producto.category}
                    cantidad={producto.cantidad}/>
                }
            })
            }                
        </div>
    </>
  )
}
