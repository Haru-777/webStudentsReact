import React, { useState } from 'react';
import '../styles/doubtsinfo.scss';
import ModalDoubt from '../modals/ModalDoubts';
import question from '../assets/logos/qestion.png';


export const Doubtsinfo = () => {
    const [matter, setMatter] = useState('');
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className='doubtsInfo' onClick={() => setOpenModal(true)}>
                <div className='info'> 
                    <h2>Referencia pregunta:</h2>
                    <p>Actividad: </p>
                    <p>Estado: </p>
                    {matter}
                </div>
                <img src={question} alt="Pregunta" className='question' ></img>
            </div>
            <ModalDoubt open={openModal} onClose={() => setOpenModal(false)} />
        </>
    )
}
export default Doubtsinfo;