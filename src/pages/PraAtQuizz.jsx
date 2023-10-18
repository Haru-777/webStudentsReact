import React, { useState } from 'react'
import Quizz from '../containers/Quizz';
import ModalPlayQuizz from '../modals/ModalPlayQuizz';

const PraAtQuizz = () => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <div>
      <Quizz/>
      <ModalPlayQuizz open={openModal} onClose={()=>setOpenModal(false)}/>
    </div>
  )
}

export default PraAtQuizz;