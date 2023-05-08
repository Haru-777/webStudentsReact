import React, { useState } from 'react';
import '../styles/header.scss';
import logo from '../assets/logos/logoSinFondo.png';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <nav>
            <div className="navbar-left">
                <img src={logo} alt="logo" className="logo" />
                <ul>
                    <li>
                        <a href="/myCourses">Mis Cursos</a>
                    </li>
                    <li>
                        <a href="/doubts">Dudas</a>
                    </li>
                    <li>
                        <a href="/downloads">Descargar actividades</a>
                    </li>
                    <li>
                        <a href="/rea">Contenido Rea</a>
                    </li>
                    <li>
                        <a href="/activitys">Actividades</a>
                    </li>
                </ul>
            </div>
            <div className="dropdown">
                <button onClick={() => setIsActive(!isActive) } className='dropbtn'>Perfil
                </button>
                { isActive && 
                <div className="dropdown-content">
                    <a href="/myAcount">Modificar Perfil</a>
                    <a href="/login">Cerrar Sesión</a>
                </div>}
            </div>
        </nav >
    );
}

export default Header;