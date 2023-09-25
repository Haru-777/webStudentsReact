import React from 'react';
import see from '../assets/logos/ver.png';
import '../styles/global.scss';
import '../styles/modals.scss';

const InfSubj = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div className='overlay'>

            <div className="modal-container">
                <div className="mat-x">
                    <h2 className="letter-modal">¡Saludos!</h2>
                    <p onClick={onClose} className="close-btn">X</p>
                </div>
                <div className="lo-tex">
                    <p className='txt-dudsubj' >
                        Inicia tu proceso de aprendizaje en casa. <br />
                        Sigue el paso a paso de SMARTFC, en el lugar que se te indique:
                        <ul className='list-subj'>
                            <li> <a className='subj-a'>En casa</a> (Antes de la clase).</li>
                            <li><a className='subj-a'> En clase </a> (Durante la clase).</li>
                        </ul>
                        Sigue de forma secuencial estos momentos:
                        <ul>
                            <li><a className='subj-a' >MB2:</a> Observa detenidamente el contenido REA(video),
                                las veces que quieras, si tienes dudas,
                                pregúntale a tu profesor.
                            </li>
                            <li><a className='subj-a'> MB3:</a> Aquí realizarás un quizz sobre el video que acabas de ver.<br />
                                Recuerda realizarlo unicamente cuando estes seguro de haber entendido el video.
                            </li>
                            <li>
                                <a className='subj-a'> En clase </a>, descarga el taller y presenta tu evaluación.
                            </li>
                        </ul>
                        <a className='txr-subj'>¡Buena suerte!</a>
                    </p>
                    <img src={see} alt="Informacion" className='solve' ></img>
                </div>
            </div>
        </div>
    )
}

export default InfSubj;