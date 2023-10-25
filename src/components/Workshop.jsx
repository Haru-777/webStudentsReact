import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/pdfWorkshop.scss';
import '../styles/global.scss';
import '../styles/modals.scss';


const Workshop = () => {
    const [responsew, setresponsew] = useState([]);
    const [responsem, setresponsem] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const info_questionw = JSON.parse(localStorage.getItem("materia"));
        //if (!info_question.student) return
        const id_tstudet = info_questionw.id_actividad;
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/loadVideoActivity',
            data: {
                id_actividad: id_tstudet,

            }

        }).then(function (response) {
            console.log(response);
            setresponsew(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }, [])

       
    useEffect(() => {
        const info_acivity = JSON.parse(localStorage.getItem("materia"));
        const id_student = JSON.parse(localStorage.getItem("login"));
        //console.log(info_matter);  const id_materia = info_matter.id_materiaActiva
         const id_acivity = info_acivity.id_actividad;
         const  id_students = id_student.student.id_estudiante
         console.log(id_student);
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/uploadEventoActual',
            data:{
                id_estudiante: id_students,
                id_actividad: id_acivity,
                paso: "4"
                
            }
            
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }, [])


    return (
        <div className='pdfdi'>
            <div className='title-pdf'>
                <h2 className='pdf-title'>Aquí podrás encontrar el PDF de la actividad</h2>
                <p className="close-btn" onClick={() => navigate("/myCourses")}>X</p>
            </div>
            <iframe title="Visor de PDF"
                src={responsew.urltaller}
                width="80%"
                height="700px" />
        </div>
    )
}

export default Workshop;