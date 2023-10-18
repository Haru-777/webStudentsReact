import React, { useState } from 'react';
import Test from '../containers/Test';
import ModalPlayTest from '../modals/ModalPlayTest';

const PracAtTest = () => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <div>
        <Test/>
        <ModalPlayTest  open={openModal} onClose={()=>setOpenModal(false)}/>
    </div>
  )
}
export default PracAtTest