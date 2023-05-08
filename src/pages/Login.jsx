import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/login.scss';
import '../styles/global.scss';
import logo from '../assets/logos/Logo-in.png';
import donwload from '../assets/logos/donwload.jpg';


const Login = () => {
    const form = useRef(null);

    const [formLogin, setFormLogin] = useState({
        usename: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormLogin((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleBlur = () => {
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if(!emailRegex.test(formLogin.usename)){
            setFormLogin((prevState) => ({
                ...prevState,
                emailError: 'porfavor ingrese una direccion de correo electronica valida'
            }));
        }else{
            setFormLogin((prevState => ({
                ...prevState,
                emailError: ''
            })));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formLogin.usename.trim() === '') {
            console.log('El Usuario es Obligatorio');
            return;
        }
        if (formLogin.password.trim() === '') {
            console.log('La contraseña es Obligatorio');
            return;
        }
        
        const formData = new FormData(form.current);
        const data = {
            usename: formData.get('usename'),
            password: formData.get('password')
        };
        console.log(data);
    };


    return (
        <div className="Bottom">
            <div className="Login-container">
                <img src={logo} alt="logo" className="logo-login" ></img>
                <form  ref={form} id="formLogin" name="formLogin" className="form-login" onSubmit={handleSubmit} >
                    <div className="inp-email">
                        <input type="email" id="usename" name="usename" value={formLogin.usename} onChange={handleChange} 
                        onBlur = {handleBlur}
                        placeholder="Correo Electronico" className="inp-emailtxt" />
                        <label htmlFor="email" className="labele" >Correo Electronico</label>
                        {formLogin.usename.trim () === '' && (
                            <div className="error-message"> El usuario es obligatorio</div>
                        )}
                        {formLogin.emailError && (
                            <div className="error-message">{formLogin.emailError}</div>
                        )}
                        </div>
                    <div className="inp-passw">
                        <input type="password" name="password" value={formLogin.password} onChange={handleChange} placeholder="Contraseña" className="inp-passtxt" required />
                        <label htmlFor="password" className="labelcx">Contraseña</label></div>
                    <button type="submit"
                        onClick={handleSubmit}
                        disabled ={formLogin.emailError !== '' }
                        className="btnlogin">
                        Iniciar sesión
                    </button>

                </form>
                <div class="txtcuenta">
                    ¿No tienes cuenta? <a name="linkRegister" className="txtreg" href="/register">Registrate</a>
                </div>
                <div class="endlogin">
                    <div class="txtservidor"><span data-toggle="modal" data-target="#mimodalejemplo">Servidor:</span>
                        <span className="text-info pl-1" >Conectado</span>
                        <span className="text-danger pl-1" >Desconectado</span>
                    </div>
                    <img src={donwload} class="imapp" alt="App Movil" />
                </div>
            </div>
        </div >
    );
}

export default Login;