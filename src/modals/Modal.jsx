import React, { useEffect, useState } from 'react';
import hi from '../assets/logos/saludo.png';
import '../styles/global.scss';
import '../styles/modals.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Modal = ({ open, onClose }) => {
    const navigate = useNavigate();
    const [btnHab, setBtnHab] = useState('');
    const [btnHabTest, setBtnHabTest] = useState('');
    useEffect(() => {
        
        const info_lduda = JSON.parse(localStorage.getItem("materia"));
        if (!info_lduda) return
        const validateAnswer = info_lduda.evaluacion;
        const validateDocument = info_lduda.taller;
        //console.log(info_lduda);


        if (validateDocument == 1) {
            setBtnHab(true);
        }

        if (validateAnswer == 1) {
            setBtnHabTest(true);
        }
    }, []);


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
                    <button onClick={() => navigate("/Myactivity")} className='btn-modal'>Práctica en Casa</button>
                    <button onClick={() => navigate("/classActy")}
                        disabled={!btnHab}
                        className='btn-modal'>Práctica en Clase</button>
                    <button className='btn-test' onClick={() => navigate("/test")}
                        disabled={!btnHabTest} >Realiza tu Examen</button>
                         <div class="ad"> Al dar clic, el examen iniciará inmediatamente, entonces si por cualquier razón sales de la pantalla, el resultado de 
                         tu actividad será 1. Da clic Solo si estás seguro de Realizar el Examen, NO lo podrás repetir.</div>
                </div>
            </div>
        </div>
    )
}

export default Modal;