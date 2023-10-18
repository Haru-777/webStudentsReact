import React, { useState } from 'react';
import solve from '../assets/logos/doubtds.png';
import '../styles/global.scss';
import '../styles/modals.scss';

const Modal = ({ open, onClose, responsem }) => {
    if (!open) return null;
    //console.log(responsem[0].pregunta);
    const respuestaVacia = !responsem[0].respuesta || responsem[0].respuesta.trim() === "";

    return (
        <div className='overlay'>

            <div className="modal-container">
                <div className="mat-x">
                    <h2 className="letter-modal">{responsem[0].pregunta}</h2>
                    <p onClick={onClose} className="close-btn">X</p>
                </div>
                <div className="lo-tex">
                    {respuestaVacia ? (
                        <>
                            <p className='txt-dud'>El profesor aun no responde tu pregunta</p>
                            <img src={solve} alt="Respuesta" className='solve' />
                        </>
                    ) : (
                        <>
                            <p className='txt-dud'>{responsem[0].respuesta}</p>
                            <img src={solve} alt="Respuesta" className='solve' />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Modal;