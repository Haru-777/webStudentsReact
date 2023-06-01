import React from 'react';
import see from '../assets/logos/ver.png';
import '../styles/global.scss';
import '../styles/modals.scss';

const Infdoubts = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div className='overlay'>

            <div className="modal-container">
                <div className="mat-x">
                    <h2 className="letter-modal">¡Saludos!</h2>
                    <p onClick={onClose} className="close-btn">X</p>
                </div>
                <div className="lo-tex">
                    <p className='txt-dud' >
                    Aquí podrás encontrar la información relacionada con las preguntas que le has realizado a tu profesor.
                    </p>
                    <img src={see} alt="Informacion" className='solve' ></img>
                </div>
            </div>
        </div>
    )
}

export default Infdoubts;