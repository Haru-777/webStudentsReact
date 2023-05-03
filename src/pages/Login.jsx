import React, { useRef, Router, Route } from "react";
import { NavLink } from "react-router-dom";
import '../styles/login.scss';
import '../styles/global.scss';
import logo from '../assets/logos/logoSinFondo.png';
import txtlogo from '../assets/logos/smartFCLogo.png';
import donwload from '../assets/logos/donwload.jpg';


const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            usename: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }

    return (
        <div className="Bottom">
            <div className="Login-container">
                <img src={logo} alt="logo" className="logo-login" ></img>
                <img src={txtlogo} alt="logo" className="logotxt" />
                <form action="/" className="form" ref={form}>
                    <div className="inputContainer">
                        <input type="email" name="email" placeholder="Correo Electronico" className="inp-emailtxt" required />
                        <label htmlFor="email" className="label" >Correo Electronico</label></div>
                    <div className="inputContainer">
                        <input type="password" name="password" placeholder="Contraseña" className="inp-passtxt" required />
                        <label htmlFor="password" className="labelcx">Contraseña</label></div>
                    <button
                        onClick={handleSubmit}
                        className="btnlogin">
                        Iniciar sesión
                    </button>

                </form>
                <div class="txtcuenta">
                    <a > ¿No tienes cuenta? <a name="linkRegister" class="txtreg" to={'/register'}>Registrate</a></a>
                </div>
                <div class="endlogin">
                        <div class="txtservidor"><span data-toggle="modal" data-target="#mimodalejemplo">Servidor:</span>
                            <span class="text-info pl-1" >Conectado</span>
                            <span class="text-danger pl-1" >Desconectado</span>
                        </div>
                        <img src={donwload} class="imapp"  alt="Logo"  />
                    </div>
            </div>
        </div >
    );
}

export default Login;