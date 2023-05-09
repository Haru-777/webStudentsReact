import React, { useRef } from "react";
import '../styles/register.scss';
import '../styles/global.scss';
import reglogo from '../assets/logos/regssma.png';
import txtreg from '../assets/logos/regtxt.png'

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
            <div className="Register-container">
                <img src={reglogo} alt="logo" className="reg-logo" ></img>
                <form action="/" className="form-ref" ref={form}>
                    <div className="inp-name">
                        <input type="text" name="fname" placeholder="Nombres" className="inp-nametxt" required />
                        <label htmlFor="name" className="name-lab" >Nombres</label>
                    </div>
                    <div className="inp-lname">
                        <input type="text" name="lname" placeholder="Apellidos" className="inp-lnametxt" required />
                        <label htmlFor="apellidos" className="lname-lab" >Apellidos</label></div>
                    <div className="inp-sch">
                        <label htmlFor="school" className="sch-lab" >Seleccione su colegio:</label>
                        <select className="sch-ch" id="choseSchool">
                            <option value="volvo">Colegio 1</option>
                            <option value="saab">Colegio 2</option>
                            <option value="mercedes">Colegio 1</option>
                        </select>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Correo Electronico" className="inp-emailtxt" required />
                        <label htmlFor="email" className="label" >Correo Electronico</label>
                    </div>
                    <div className="inputContainer">
                        <input type="password" name="password" placeholder="Contraseña" className="inp-passtxt" required />
                        <label htmlFor="password" className="labelcx">Contraseña</label>
                    </div>
                    <div className="inputContainer">
                        <input type="password" name="password" placeholder="Contraseña" className="inp-passtxt" required />
                        <label htmlFor="password" className="labelcx">Contraseña</label>
                    </div>
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