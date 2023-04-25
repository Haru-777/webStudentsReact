import React from 'react';
import '../styles/header.scss';
import logo from '../assets/logos/logoSinFondo.png';

const Header = () => {
    return (
        <nav>
            <div className="navbar-left">
                <img src={logo} alt="logo" className="logo" />
                <ul>
                    <li>
                        <a href="/">Mis Cursos</a>
                    </li>
                    <li>
                        <a href="/">Dudas</a>
                    </li>
                    <li>
                        <a href="/">Descargar actividades</a>
                    </li>
                    <li>
                        <a href="/">Contenido Rea</a>
                    </li>
                    <li>
                        <a href="/">Actividades</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <button className='dropbtn'>Perfil
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">Modificar Perfil</a>
                    <a href="#">Cerrar Sesión</a>
                </div>
            </div>
        </nav >
    );
}

export default Header;