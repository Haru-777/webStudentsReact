import React, { useEffect, useState } from 'react';
import '../styles/matterinfo.scss';
import Modal from '../modals/Modal';
import axios from 'axios';

const Matterinfo = ({filter}) => {
    const [matter, setMatter] = useState('');
    const [responsem, setresponsem] = useState([]);
    const [idact, setIdact] = useState(0);
    const [openModal, setOpenModal] = useState(false);


    useEffect(() => {
        const info_matter = JSON.parse(localStorage.getItem("infosubject"));
        console.log(info_matter);
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
            localStorage.setItem("idmateria", JSON.stringify(response.data));
        }).catch((error) => {
            console.log(error);
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

    return (
        <>
            {dataFilterAcc().map((activity, indexa) => {

                return (
                    <>
                        <div className='matterInfo' key={indexa} onClick={() => setOpenModal(true)}>
                            <h2>Actividad: {activity.titulo_actividad}</h2>
                            <p>Objetivo: {activity.descripcion_actividad}</p>
                            {matter}
                        </div>
                        <Modal open={openModal} onClose={() => setOpenModal(false)} />
                    </>
                )
            })}


        </>
    );
}

export default Matterinfo;