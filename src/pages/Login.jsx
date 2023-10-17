import React, { useRef, useState } from "react";
import { Navigate, NavLink,useNavigate } from "react-router-dom";
import '../styles/login.scss';
import '../styles/global.scss';
import logo from '../assets/logos/Logo-in.png';
import donwload from '../assets/logos/call.png';
import axios from "axios";

const Login = () => {
    const form = useRef(null);
    const navigate = useNavigate();

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
    const handleGuest = () => {
        navigate("/guest");
        
    }

    const handleBlur = () => {
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (formLogin.usename === '') {
            setFormLogin((prevState) => ({
                ...prevState,
                emailError: 'El correo electrónico es obligatorio'
            }));
        }
        else if (!emailRegex.test(formLogin.usename)) {
            setFormLogin((prevState) => ({
                ...prevState,
                emailError: 'Por favor ingrese una dirección de correo electrónico válida.'
            }));
        }
        else {
            setFormLogin((prevState => ({
                ...prevState,
                emailError: ''
            })));
        }
        if (formLogin.password === '') {
            setFormLogin((prevState) => ({
                ...prevState,
                passError: 'La contraseña es obligatoria'
            }));
        }
        else if (!passRegex.test(formLogin.password)) {
            setFormLogin((prevState) => ({
                ...prevState,
                passError: 'Por favor ingrese una contraseña de 8 Caracteres, al menos un número y una letra.'
            }));
        } else {
            setFormLogin((prevState => ({
                ...prevState,
                passError: ''
            })));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            usename: formData.get('usename'),
            password: formData.get('password')
        };
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/loginEstudiante',
            data: {
                correo_electronico: data.usename, //Quitar esto para un get
                contrasena: data.password
            }
        }).then(function (response) {
            localStorage.setItem("login", JSON.stringify(response.data))
            window.location.reload()
        }).catch(function (error) {
            console.log(error)
        })
    };
    const btnlogindisabled = () =>{
        if(formLogin.emailError || formLogin.passError) return(true);
        else if(formLogin.usename === "" || formLogin.password === "") return(true);
        else return(false);     
    }
    return (
        <div className="Bottom">
            <div className="Login-container">
                <img src={logo} alt="logo" className="logo-login" ></img>
                <form ref={form} id="formLogin" name="formLogin" className="form-login" onSubmit={handleSubmit} >
                    <div className="inp-email">
                        <input type="email" id="usename" name="usename" value={formLogin.usename} onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Correo Electronico" className="inp-emailtxt" />
                        <label htmlFor="email" className="labele" >Correo Electronico</label>
                        {formLogin.emailError && (
                            <div className="error-message">{formLogin.emailError}</div>
                        )}
                    </div>
                    <div className="inp-passw">
                        <input type="password" id="password" name="password" value={formLogin.password} onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Contraseña" className="inp-passtxt" />
                        <label htmlFor="password" className="labelcx">Contraseña</label>
                        {formLogin.passError && (
                            <div className="error-message">{formLogin.passError}</div>
                        )}
                    </div>
                    <button type="submit"
                        className="btnlogin"
                        disabled={btnlogindisabled()}
                        onClick={handleSubmit}
                        >
                        Iniciar sesión
                    </button>

                </form>
                <button onClick={() => navigate("/guest")}
                        className="btnlogin"
                        >
                        Iniciar como Invitado
                    </button>
                <div className="txtcuenta">
                    ¿No tienes cuenta? <a name="linkRegister" className="txtreg" href="/register">Registrate</a>
                </div>
                <div className="endlogin">
                   {/*  <div className="txtservidor"><span data-toggle="modal" data-target="#mimodalejemplo">Servidor:</span>
                        <span>Conectado</span>
                    </div> */}
                    <img src={donwload} className="imapp" alt="App Movil" />
                    <label className="imapptx" >Descarga la app Móvil</label>
                </div>
            </div>
        </div >
    );
}

export default Login;