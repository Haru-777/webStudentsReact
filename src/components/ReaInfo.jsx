import React, { useEffect, useState } from 'react';
import '../styles/matterinfo.scss';
import Modal from '../modals/Modal';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export const ReaInfo = ({filter}) => {
  const navigate = useNavigate();
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
            <div className='matterInfo' key={indexr} onClick={() => navigate("/myactivity")}>
              <h2>{rea.nombre_CREA}</h2>
              <p>{rea.id_grado} </p>

            </div>
          </>
        )
      })}
    </>
  );
}
export default ReaInfo;
