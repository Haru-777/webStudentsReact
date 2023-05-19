import React, { useState } from 'react';
import solve from '../assets/logos/doubtds.png';
import '../styles/global.scss';
import '../styles/modals.scss';

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div className='overlay'>
            <div>{`Estado: ${open}`}</div>
            <div className="modal-container">
                <div className="mat-x">
                    <h2 className="letter-modal">Duda</h2>
                    <p onClick={onClose} className="close-btn">X</p>
                </div>
                <div className="lo-tex">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero iusto iure cumque repudiandae modi fuga quod necessitatibus impedit quia, earum soluta recusandae molestias saepe? Pariatur harum consequatur vel aut ab.</p>
                    <img src={solve} alt="Respuesta" className='solve' ></img>
                </div>
            </div>
        </div>
    )
}

export default Modal;