import React, { useState } from 'react';
import '../styles/matterinfo.scss';
import Modal from '../modals/Modal';

const Matterinfo = () => {
    const [matter, setMatter] = useState('');



    const [openModal, setOpenModal] = useState(false);


    return (
        <>
            <div className='matterInfo' onClick={() => setOpenModal(true)}>
                <h2>Actividad</h2>
                <p>Objetivo: </p>
                {matter}
            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
        </>
    );
}

export default Matterinfo;