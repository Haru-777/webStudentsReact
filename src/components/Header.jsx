import React, { useState } from 'react';
import '../styles/header.scss';
import logo from '../assets/logos/logoSinFondo.png';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <nav>
            <div className="navbar-left">
                <img src={logo} alt="logo" className="logo" />
                <ul>
                    <li>
                        <a href="/myCourses">Mis Materias</a>
                    </li>
                    <li>
                        <a href="/doubts">Dudas</a>
                    </li>
                    <li>
                        <a href="/downloads">Actividades Descargadas</a>
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
                    <p onClick={handleLogout}> Cerrar Sesión</p>
                </div>}
            </div>
        </nav >
    );
}

export default Header;