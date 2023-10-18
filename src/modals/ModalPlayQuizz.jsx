import React, { useEffect, useState } from 'react';
import hi from '../assets/logos/saludo.png';
import '../styles/global.scss';
import '../styles/modals.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ModalPlayQuizz = ({ open, onClose }) => {
    const navigate = useNavigate();
    if (!open) return null;
    return (
        <div className='overlay'>
            <div className="modal-container">
                <div className="mat-x">
                    <h2 className="letter-modal">Instrucciones:</h2>
                    <p onClick={onClose} className="close-btn">X</p>
                </div>
                <img src={hi} alt="saludo" className='hi' ></img>
                <li className='txt-f'>
                    <ul>Podras realizar el quizz solo una vez.</ul>
                    <ul>Selecciona una unica respuesta.</ul>
                    <ul>El resultado estara basado en si la respuesta es correcta y el tiempo que tomes en responder.</ul>
                    <ul>Al dar click en JUGAR el quizz iniciara de inmediato y no podras repetirlo.</ul>
                </li>
            </div>
            <div className="btn-div">
                <button onClick={() => navigate("/Myactivity")} className='btn-modal'>Jugar</button>
            </div>
        </div>
    )
}

export default ModalPlayQuizz;