import React from 'react';
import '../styles/global.scss';
import '../styles/modals.scss';

const ModalTest = () => {
    return (
        <div className='overlay'>
            <div className="modal-container">
                <div className="mat-x">
                    <h2 className="letter-modal">Instrucciones</h2>
                    <p onClick={onClose} className="close-btn">X</p>
                </div>
                <div className="lo-tex">
                    <ul>
                        <li>Podrás realizar la evaluación solo una vez.</li>
                        <li>Selecciona una unica respuesta.</li>
                        <li>El resultado estará basado en si la respuesta es correcta o no
                            y  en el tiempo que te tomes en responder.</li>
                        <li>Una vez de clic en "JUGAR" no podrás parar o pausar la actividad 
                            por lo cual si por cualquier razón sales de la pantalla, el resultado de t
                            u actividad será 1.
                        </li>
                    </ul>
                </div>
                <div className="btn-div">
                    <button className='btn-modal'>Jugar!</button>
                </div>
            </div>
        </div>
    )
}

export default ModalTest