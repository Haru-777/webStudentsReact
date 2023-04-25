import React, {useRef} from "react";
import '../styles/login.scss';
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
        <div className="Login">
            <div className="Login-container">
                <img src={logo} alt="logo" className="logo" ></img>
                <img src={txtlogo} alt="logo" className="logotxt"/>
                <form action="/" className="form" ref={form}>
                    <div className="inputContainer">
                    <input type="email" name="email" placeholder="Correo Electronico" className="inp-emailtxt" required/>
                    <label htmlFor="email" className="label" >Correo Electronico</label></div>
                    <div className="inputContainer">
                    <input type="password" name="password" placeholder="Contraseña" className="inp-passtxt" required/>
                    <label htmlFor="password" className="labelcx">Contraseña</label></div>
                    <button
                    onClick={handleSubmit}
                    className="btnlogin">
                    Iniciar sesión
                    </button>
                    
                </form>
            <button
                className="secondary-button signup-button"
            >
                Registrarse
            </button>
        </div>
    </div >
    );
}

export default Login;