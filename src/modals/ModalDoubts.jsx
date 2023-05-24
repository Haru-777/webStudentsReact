import React, { useState } from 'react';
import solve from '../assets/logos/doubtds.png';
import '../styles/global.scss';
import '../styles/modals.scss';

const Modal = ({ open, onClose, response }) => {
    if (!open) return null;
    return (
        <div className='overlay'>

            <div className="modal-container">
                <div className="mat-x">
                    <h2 className="letter-modal">Duda</h2>
                    <p onClick={onClose} className="close-btn">X</p>
                </div>
                <div className="lo-tex">
                    <p className='txt-dud' >{
                        response
                    }</p>
                    <img src={solve} alt="Respuesta" className='solve' ></img>
                </div>
            </div>
        </div>
    )
}

export default Modal;