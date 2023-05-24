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
                    <img src={see} alt="Informacion" className='solve' ></img>
                    <p className='txt-dud' >
                        Inicia tu proceso de aprendizaje en casa. <br />
                        Sigue el paso a paso de SMARTFC, en el lugar que se te indique:
                        <ul>
                            <li> En casa (Antes de la clase).</li>
                            <li> En clase (Durante la clase).</li>
                        </ul>
                        Sigue de forma secuencial estos momentos:
                        <ul>
                            <li>MB2: Observa detenidamente el contenido REA(video),
                                las veces que quieras, si tienes dudas,
                                pregúntale a tu profesor.
                            </li>
                            <li>MB3: Aquí realizarás un quizz sobre el video que acabas de ver.<br />
                                Recuerda realizarlo unicamente cuando estes seguro de haber entendido el video.
                            </li>
                            <li>
                                En clase, descarga el taller y presenta tu evaluación
                            </li>
                        </ul>
                        ¡Buena suerte!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfSubj;