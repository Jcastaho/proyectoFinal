import React from 'react';
import Ecommerceimagen from "../../images/ecommerceimagen.png";

export const AcercaDe = () => {
    return (
        <div className="acerca-de-container">
            <div className="header-placeholder" />
            <div className="acerca-de">
                <h2>Bienvenido a nuestro E-Commerce de Zapatos</h2>
                <img src={Ecommerceimagen} alt="Equipo de Desarrollo" className="equipo-imagen" />                
                <p>
                    Somos un equipo apasionado de estudiantes universitarios que comparten el amor por la moda y la tecnología.
                </p>
                <p>
                    En nuestro E-Commerce, nos esforzamos por brindarte la mejor experiencia de compra de zapatos en línea.
                    Trabajamos con marcas reconocidas y garantizamos la calidad de nuestros productos.
                </p>
                <p>
                    Nuestra misión es fusionar la moda con la comodidad, ofreciéndote una amplia variedad de estilos y tallas.
                </p>
                <p>
                    Desde nuestro lanzamiento en octubre de 2023, hemos crecido gracias al apoyo continuo de nuestros clientes.
                    ¡Gracias por ser parte de nuestra comunidad!
                </p>
                {/* Agrega más secciones según tus necesidades */}
            </div>
        </div>
    );
};
