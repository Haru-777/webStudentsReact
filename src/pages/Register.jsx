import React, { useRef } from "react";
import '../styles/register.scss';
import '../styles/global.scss';
import logo from '../assets/logos/logoSinFondo.png';
import txtlogo from '../assets/logos/smartFCLogo.png';

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
        <div className="Register">
            <div className="Register-container">
                <img src={logo} alt="logo" className="logo" ></img>
                <img src={txtlogo} alt="logo" className="logotxt" />
                <form action="/" className="form" ref={form}>
                    <div className="inputContainer">
                        <input type="text" name="fname" placeholder="Nombres" className="inp-nametxt" required />
                        <label htmlFor="name" className="label" >Nombres</label></div>
                    <div className="inputContainer">
                        <input type="text" name="lname" placeholder="Apellidos" className="inp-lastnametxt" required />
                        <label htmlFor="apellidos" className="label" >Apellidos</label></div>
                    <div className="inputContainer">
                        <label htmlFor="school" className="label" >Seleccione su colegio:</label>

                        <select name="choseschool" id="choseSchool">
                            <option value="volvo">Colegio 1</option>
                            <option value="saab">Colegio 2</option>
                            <option value="mercedes">Colegio 1</option>
                        </select>
                        <input type="email" name="email" placeholder="Correo Electronico" className="inp-emailtxt" required />
                        <label htmlFor="email" className="label" >Correo Electronico</label></div>
                    <div className="inputContainer">
                        <input type="password" name="password" placeholder="Contraseña" className="inp-passtxt" required />
                        <label htmlFor="password" className="labelcx">Contraseña</label></div>
                    <div className="inputContainer">
                        <input type="password" name="password" placeholder="Contraseña" className="inp-passtxt" required />
                        <label htmlFor="password" className="labelcx">Contraseña</label></div>
                    <button
                        onClick={handleSubmit}
                        className="btnlogin">
                        Registrarse
                    </button>

                </form>
            </div>
        </div >
    );
}

export default Login;