import React, { useEffect, useState } from 'react';
import hi from '../assets/logos/saludo.png';
import '../styles/global.scss';
import '../styles/modals.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Modal = ({ open, onClose }) => {
    const navigate = useNavigate();
    const [btnHab, setBtnHab] = useState(false);
    useEffect (() => {
    const info_lduda = JSON.parse(localStorage.getItem("metricaq"));
    if(!info_lduda)return
    const validateAnswer = info_lduda[0].check_answer;
    console.log(validateAnswer);



    if (validateAnswer == 1) {
        setBtnHab(true);
    }}, [])
   

    if (!open) return null;
    return (
        <div className='overlay'>
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
                    <button onClick={() => navigate("/Myactivity")} className='btn-modal'>Practica en Casa</button>
                    <button onClick={() => navigate("/classActy")}
                        disabled={btnHab}
                        className='btn-modal'>Practica en Clase</button>
                    <button onClick={() => navigate("/test")} className='btn-modal'>Realiza tu Examen</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;