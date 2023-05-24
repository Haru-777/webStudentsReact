import React from 'react';
import '../styles/subjectinfo.scss';
import pruSubject from '../assets/logos/prusubject.png';
import { useNavigate } from 'react-router-dom';

const SubjectInfo = () => {
  const navigate = useNavigate();
  return (
    <div className='subject-info'  onClick={() => navigate("/myCourses")}>
      <div className='txt-subjectinf'>
        <h2>Estadistica: </h2>
        <p>Grado: </p>
      </div>
      <img src={pruSubject} alt="logo" className="sub-logo" ></img>
    </div>
  )
}

export default SubjectInfo;
