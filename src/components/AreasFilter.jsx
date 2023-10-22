import React, { useEffect, useRef, useState } from 'react';
import '../styles/areafilter.scss';
import axios from 'axios';
import FilterOption from '../containers/FilterOption';

const AreasFilter = ({setresponsef}) => {

  const form = useRef(null);
  const [response, setresponse] = useState([]);
  const [idSubject, setIdSubject] = useState([]);
  const [error, setError] = useState(" ");

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3001/api/loadAllcontents',
    }).then(response => {
      setresponse(response.data)
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])
  const handleFiltro = (event) => {
    if(event.target.value == ''){
      setresponsef([])
      return
    }
    console.log('si entra al filtro');

    event.preventDefault();
    /*const formDatar = new FormData();
    const data = {
      choseidsuject: formDatar.get('choseidsuject')
    }*/

    axios({
      method: 'post',
      url: 'http://localhost:3001/api/searchContentREAbyMateria',
      data: {
        id_materia: event.target.value
      }
    }).then((response) => {
      setresponsef(response.data)
      console.log(response.data);

      console.log('entro al filtro');
    }).catch((error) => {
      setError(error.response.data.message);
    })
  }


  /* useEffect(() => {
   const id_subjetRea = JSON.parse(localStorage.getItem("rea"));
   //console.log(info_matter);
   if (!id_subjetRea) return
   const id_subjetReas = id_subjetRea.id_materia;
   axios({
     method: 'post',
     url: 'http://localhost:3001/api/searchContentREAbyMateria',
     data: {
       id_materia: id_subjetReas,
     }
   }).then((response) => {
     setresponse(response.data)
     console.log(response.data);
   }).catch((error) => {
     setError(error.response.data.message);
   })
 }, [])  */

  return (
    <>

      <div className='inf-a' id="formReg" ref={form} >
        <select onChange={(e) => handleFiltro(e)} className='sarea-inf' id="choseidsuject" name="choseidsuject">
          <option value="">Seleccione</option>
          {response.map((subject) => (
            <option
              key={subject.id_materia}
              value={subject.id_materia}
              >
              {subject.id_materia}
            </option>
          ))}
        </select>
        {/*<button onClick={handleFiltro}>Filtrar</button>*/}
      </div>




    </>
  )
}

export default AreasFilter;