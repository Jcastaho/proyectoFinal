import React, { useContext } from "react";
import Card from "../../images/img03.jpg";
import { DataContext } from "../../context/dataprovider";

export const Carrito = () => {

    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;

    const tooglefalse = () => {
        setMenu(false);
    }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    const resta = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1;
            }
            setCarrito([...carrito])
        })
    }

    const suma = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad += 1;
            }
            setCarrito([...carrito])
        })
    }

    const removeProducto = id => {
        if (window.confirm("¿Quieres descartar el producto?")) {
            carrito.forEach((item, index) => {
                if (item.id === id) {
                    item.cantidad = 1;
                    carrito.splice(index, 1)
                }
            })
            setCarrito([...carrito])
        }
    }

    const checkoutButton = async () => {
        const productos = {
            title: "Productos",
            price: total,
            cantidad: 1,
        };
    
        const res = await fetch("http://localhost:4000/create-order", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ producto: productos }),
        });
    
        try {
            // Parsea la respuesta como JSON
            const data = await res.json();
    
            // Asegúrate de que la propiedad init_point esté presente en el cuerpo
            if (data && data.body && data.body.init_point) {
                window.location.href = data.body.init_point;
            } else {
                console.error('La respuesta del servidor no contiene init_point:', data);
            }
        } catch (error) {
            console.error('Error al parsear la respuesta JSON:', error);
        }
    };    

    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carrito__close" onClick={tooglefalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su carrito</h2>
                <div className="carrito__center">
                    {

                        carrito.length === 0 ? <h2 style={{
                            textAlign: "center", fontSize: "3rem"
                        }}> Carrito Vacio</h2> : <>
                            {
                                carrito.map((producto) => (
                                    <div className="carrito__item" key={producto.id}>
                                        <img src={producto.image} alt="" />
                                        <div>
                                            <h3>{producto.title}</h3>
                                            <p className="price">{"$" + producto.price}</p>
                                        </div>
                                        <div>
                                            <box-icon name="up-arrow" type="solid" onClick={() => suma(producto.id)}></box-icon>
                                            <p className="cantidad">{producto.cantidad}</p>
                                            <box-icon name="down-arrow" type="solid" onClick={() => resta(producto.id)}></box-icon>
                                        </div>
                                        <div className="remove__item" onClick={() => removeProducto(producto.id)}>
                                            <box-icon name="trash"></box-icon>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    }
                </div>
                <div className="carrito__footer">
                    <h3>Total: ${total}</h3>
                    <button className="btn"
                        onClick={() => {checkoutButton()}}>Pagar</button>
                </div>
            </div>
        </div>
    )
}