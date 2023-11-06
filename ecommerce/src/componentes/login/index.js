import React, {useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const baseurl = "http://localhost:3001/usuarios";
const cookies = new Cookies();


export const Login = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const iniciarSesion=async()=>{
        await axios.get(baseurl, {params:{username:form.username, password: md5(form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                let respuesta = response[0];
                cookies.set('id', respuesta.id, {path: "/inicio"});
                cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/inicio"});
                cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/inicio"});
                cookies.set('nombre', respuesta.nombre, {path: "/inicio"});

                cookies.set('id', respuesta.id, {path: "/header"});
                cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/header"});
                cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/header"});
                cookies.set('nombre', respuesta.nombre, {path: "/header"});
                cookies.set('username', respuesta.username, {path: "/header"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`)
                window.location.href="../inicio"
            }
            else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })
    };
    {//valida que el usuario ya este logueado o no
        if(cookies.get('username')){                  
            const confirmarCerrarSesion = () => {
                const confirmacion = window.confirm("¿Desea cerrar sesión?");
              
                if (confirmacion) {
                    cookies.remove('id', {path: "/inicio"});
                    cookies.remove('apellido_paterno', {path: "/inicio"});
                    cookies.remove('apellido_materno', {path: "/inicio"});
                    cookies.remove('nombre', {path: "/inicio"});
    
                    cookies.remove('id', {path: "/header"});
                    cookies.remove('apellido_paterno', {path: "/header"});
                    cookies.remove('apellido_materno', {path: "/header"});
                    cookies.remove('nombre', {path: "/header"});
                    cookies.remove('username', {path: "/header"});
                    window.location.href="../login";    
                } else {
                    window.location.href="../inicio";    
                }           
            };      
            confirmarCerrarSesion();              
        }
    }

    return (
        <div className="containerPrincipal">
            <div className="containersecundario">
                <div className="form-group">
                    <label>Usuario: </label>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={handleChange}
                    />
                    <br />
                    <label>Contraseña: </label>
                    <br />
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={handleChange}
                    />
                    <br />
                    <button className="btn btn-primary" onClick={iniciarSesion}>Iniciar sesión</button>
                </div>
            </div>
        </div>
    )
}