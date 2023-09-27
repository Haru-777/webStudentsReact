import React, { useEffect, useState } from 'react';
import '../styles/matterinfo.scss';
import Modal from '../modals/Modal';
import axios from 'axios';

export const GuestInfo = ({filter}) => {
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

  const datafilterREA = () => {
    if(filter == ''){
      return(responser)
    }
    else {
      return(responser.filter(itemfilter => itemfilter.nombre_CREA.toLowerCase().includes(filter.toLowerCase())))
    }
  }

  return (
    <>
      {datafilterREA().map((rea, indexr) => {
        return (
          <>
            <div className='matterInfo' key={indexr} onClick={() => setOpenModal(true)}>
              <h2>{rea.nombre_CREA}</h2>
              <p>{rea.id_grado} </p>

            </div>
          </>
        )
      })}
    </>
  );
}
export default GuestInfo;
