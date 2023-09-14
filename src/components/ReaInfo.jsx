import React, { useEffect, useState } from 'react';
import '../styles/matterinfo.scss';
import Modal from '../modals/Modal';
import axios from 'axios';

export const ReaInfo = () => {
  const [openModal, setOpenModal] = useState(false);
  const [responser, setresponser] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3001/api/loadAllcontents',
    }).then(response => {
      setresponser(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }, [])
  return (
    <>
      {responser.map((rea, indexr) => {
        return (
          <>
            <div className='matterInfo' key={indexr} onClick={() => setOpenModal(true)}>
              <h2>{rea.nombre_CREA}</h2>
              <p>{rea.id_grado} </p>

            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
          </>
        )
      })}
    </>
  );
}
export default ReaInfo;
