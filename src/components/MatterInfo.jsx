import React, { useEffect, useState } from 'react';
import '../styles/matterinfo.scss';
import Modal from '../modals/Modal';
import axios from 'axios';

const Matterinfo = ({filter}) => {
    const [matter, setMatter] = useState('');
    const [responsem, setresponsem] = useState([]);
    const [idact, setIdact] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [error, setError] = useState(" ");


    useEffect(() => {
        const info_matter = JSON.parse(localStorage.getItem("infosubject"));
        //console.log(info_matter);
        if(!info_matter) return 
        const id_materia = info_matter.id_materiaActiva
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/loadActivityMateriaId',
            data: {
                id_materiaActiva: id_materia
            }
        }).then((response) => {
            setresponsem(response.data)
        }).catch((error) => {
            setError(error.response.data.message);
        })
    }, [])
    
    const dataFilterAcc = () => {
        if(filter == ''){
            return(responsem)
        }
        else{
            return(responsem.filter(itemfilter => itemfilter.titulo_actividad.toLowerCase().includes(filter.toLowerCase())))
        }
    } 
    const handleMateria = (data) => {
        setOpenModal(true);
        //console.log(data)
        localStorage.setItem('materia', JSON.stringify({id_actividad:data.id_actividad, id_colegio:data.id_colegio, id_grado:data.id_grado}))
        const info_acivity = JSON.parse(localStorage.getItem("materia"));
        const id_student = JSON.parse(localStorage.getItem("login"));
        //console.log(info_matter);  const id_materia = info_matter.id_materiaActiva
         const id_acivity = info_acivity.id_actividad;
         const  id_students = id_student.student.id_estudiante
         console.log(id_student);
       axios({
                method: 'post',
                url: 'http://localhost:3001/api/loadUltimoEvento',
                data:{
                    id_estudiante: id_students,
                    id_actividad: id_acivity,
                    
                }
                
            }).then((responseq) => {
                localStorage.setItem("metricaq", JSON.stringify(responseq.data));
                console.log("si entraa");
            }).catch((error) => {
                console.log(error);
            })
    }
    //console.log(dataFilterAcc())

    return (
        <>
            {dataFilterAcc().map((activity, indexa) => {

                return (
                    <>
                        <div className='matterInfo' key={indexa} onClick={() => handleMateria(activity)}>
                            <h2>Actividad: {activity.titulo_actividad}</h2>
                            <p>Objetivo: {activity.descripcion_actividad}</p>
                            {matter}
                        </div>
                        <Modal open={openModal} onClose={() => setOpenModal(false)} />
                    </>
                )
            })}
            <div className="error-message">{error}</div>

        </>
    );
}

export default Matterinfo;