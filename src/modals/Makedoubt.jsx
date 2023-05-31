import React from 'react';
import mquest from '../assets/logos/robotPregunta.png';
import '../styles/global.scss';
import '../styles/modalmake.scss';

const Makedoubt = ({ openM, onCloseM }) => {
    if (!openM) return null;
    return (
        <div className='overlaym'>

            <div className="modal-mcontainer">
                <div className="mat-mx">
                    <h2 className="letter-mmodal">Realiza tu pregunta.</h2>
                    <p onClick={onCloseM} className="close-btn">X</p>
                </div>
                <div className="lo-tex">
                    <p className='txt-dud' >
                    Ingresa la pregunta para tu profesor/a
                    </p>
                    <div className='q-form'>
                    <img src={mquest} alt="Informacion" className='solve' ></img>
                    <form className='formm'>
                        <input className='inp-question' placeholder='Escribe tu pregunta aquí.'></input>
                        <button className='btnsenq'>Enviar Pregunta</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Makedoubt;