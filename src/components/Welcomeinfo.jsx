import React from 'react';
import '../styles/welcomeinfo.scss';
import Logohi from '../assets/logos/logoSinFondo.png'
import txtloghi from '../assets/logos/smartFCLogo.png';

const Welcomeinfo = () => {

    return (
        <div className='welcomeInfo'>
            <img src={Logohi} alt="Hola" className='logo-hi'></img>
            <img src={txtloghi} alt="logo" className="logotxt-hi" />
            <h2>Bienvenido!</h2>
            <p>En esta aplicacion podras encontrar...</p>
        </div>
    );
}

export default Welcomeinfo;