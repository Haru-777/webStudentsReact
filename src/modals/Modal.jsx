import React, { useState } from 'react';
import hi from '../assets/logos/saludo.png';
import '../styles/global.scss';
import '../styles/modals.scss';

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div className='overlay'>
            <div>{`Estado: ${open}`}</div>
            <div className="modal-container">
                <div className="mat-x">
                    <h2 className="letter-modal">Materia</h2>
                    <p onClick={onClose} className="close-btn">X</p>
                </div>
                <div className="lo-tex">
                    <p className='txt-f'>Selecciona una etapa para continuar</p>
                    <img src={hi} alt="saludo" className='hi' ></img>
                </div>
                <div className="btn-div">
                    <button className='btn-modal'>Practica en Casa</button>
                    <button className='btn-modal'>Practica en Clase</button>
                    <button className='btn-modal'>Realiza tu Examen</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;