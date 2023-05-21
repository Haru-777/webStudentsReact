import React, { useState }from 'react';
import '../styles/matterinfo.scss';
import Modal from '../modals/Modal';

export const ReaInfo = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <>
    <div className='matterInfo' onClick={() => setOpenModal(true)}>
        <h2>Estadistica</h2>
        <p>Grado: </p>
        
    </div>
    <Modal open={openModal} onClose={() => setOpenModal(false)} />
</>
  );
}
export default ReaInfo;
