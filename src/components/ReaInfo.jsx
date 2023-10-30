import React, { useEffect, useState } from 'react';
import '../styles/matterinfo.scss';
import Modal from '../modals/Modal';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { useVideoUrl } from '../context';

export const ReaInfo = ({responsef, filter}) => {
  const navigate = useNavigate();
  const [responser, setresponser] = useState([]);
  const {videoUrl, setVideoUrl} = useVideoUrl();

  useEffect(() => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_BACKEND_URL}/api/loadAllcontents`,
    }).then(response => {
      setresponser(response.data)
      localStorage.setItem("rea", JSON.stringify(response.data))
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  console.log(responsef.length)


  const datafilterREA = () => {
    if(filter == '' && responsef.length == 0) {
      return(responser)
    }
    else if(responsef.length > 0){
      console.log('entro')
      return responsef
    }
    else {
      return(responser.filter(itemfilter => itemfilter.nombre_CREA.toLowerCase().includes(filter.toLowerCase())))
    }
  }
  const HandleContent = (video) => {
    navigate("/reaActivity");
    localStorage.setItem("video", JSON.stringify(video))

  }
  console.log(datafilterREA())

  return (
    <>
      {datafilterREA().map((rea, indexr) => {
        return (
          <>
            <div className='matterInfo' key={indexr} onClick={() => HandleContent(rea.id_materia)}>
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
