import React, { useEffect, useRef, useState } from 'react';
import '../styles/subjectinfo.scss';
import pruSubject from '../assets/logos/prusubject.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SubjectInfo = ({filter}) => {
  const [response, setresponse] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState(" ");
  
 

  useEffect(() => {
    const info_studianteS = JSON.parse(localStorage.getItem("login"));
    if (!info_studianteS.student) return
    const grade_studet = info_studianteS.student.grado_estudiante;
    const sh_studet = info_studianteS.student.id_colegio;
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/loadAllSubjectActivesMovil',
      data: {
        id_grado: grade_studet,
        id_colegio: sh_studet
      }
    }).then(function (response) {
      setresponse(response.data)
    }).catch(function (error) {
      setError(error.response.data.message);
    })
  }, [])


  const dataFilter = () => { 
    if (filter == '') {
      return(response)
    }
    else {
      return(response.filter(itemfilter => itemfilter.nombre_materiaActiva.toLowerCase().includes(filter.toLowerCase())))
    }
  }
  

  return (
    <>
    {dataFilter().map((subject, indexs) => {
      return(
      <div className='subject-info' key={indexs} onClick={() => {localStorage.setItem("infosubject", JSON.stringify(subject)); navigate("/myCourses")}}>
        <div className='txt-subjectinf'>
          <h2>Materia: {subject.nombre_materiaActiva} </h2>
          <p>Grado: {subject.id_grado} </p>
        </div>
        <img src={subject.url_imagen} alt="logo" className="sub-logo" ></img>
        <div className="error-message">{error}</div>
      </div>
    )
    }
  )}
    </>
  )
}

export default SubjectInfo;
