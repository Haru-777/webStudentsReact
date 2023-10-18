import React, { useEffect, useState } from 'react';
import hi from '../assets/logos/saludo.png';
import '../styles/global.scss';
import '../styles/modals.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ModalPlayTest = ({ open, onClose }) => {
    const navigate = useNavigate();
    if (!open) return null;
    return (
        <div className='overlay'>
            <div className="modal-container">
                <div className="mat-x">
                    <h2 className="letter-modal">Instrucciones:</h2>
                    <p onClick={onClose} className="close-btn">X</p>
                </div>
                <div className="lo-tex">
                    <img src={hi} alt="saludo" className='hi' ></img>
                    <ul className='txt-f'>
                        <li>Podras realizar la evaluacion solo una vez.</li>
                        <li>Selecciona una unica respuesta.</li>
                        <li>El resultado estara basado en si la respuesta es correcta y el tiempo que tomes en responder.</li>
                        <li>Al dar click en JUGAR el examen iniciara de inmediato y no podras repetirlo.</li>
                    </ul>
                </div>
                <div className="btn-div">
                    <button onClick={() => navigate("/Myactivity")} className='btn-modal'>Jugar</button>
                </div>
            </div>
        </div>
    )
}

export default ModalPlayTest;