import React, { useEffect, useRef, useState } from 'react';
import '../styles/doubtsinfo.scss';
import ModalDoubt from '../modals/ModalDoubts';
import question from '../assets/logos/qestion.png';
import axios from "axios";

export const Doubtsinfo = () => {
    const [response, setresponse] = useState('');
    const [responseq, setresponseq] = useState([]);
    const [matter, setMatter] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [idduda, setIdduda] = useState(0);

    const handleclick = (id) => {
        setOpenModal(true);
        setIdduda(id);
    }

    useEffect(() => {
        if( idduda === 0) return
        axios({
            method: 'post',
            url: 'http://localhost:3001/api//loadDuda',
            data: {
                id_duda: idduda
            }
        }).then((response) => {
            setresponse(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }, [idduda])

    useEffect(() => {
        const info_studiante = JSON.parse(localStorage.getItem("login"));
        if (!info_studiante.student) return
        const id_studet = info_studiante.student.id_estudiante;
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/loadDudaStudents',
            data: {
                id_estudiante: id_studet
            }

        }).then(function (response) {
            setresponseq(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }, [])

    console.log(response);
    return (
        <>

            {responseq.map((doubt, index) => {
                return (
                    <div className='doubtsInfo' key={index} onClick={() => handleclick(doubt.id_duda)}>
                        <div className='info' >
                            <h2>Pregunta:
                                {doubt.pregunta}
                            </h2>
                            <p>Referencia pregunta: {doubt. id_duda}</p>
                            <p>Estado: {doubt.estado_duda}</p>
                            {matter}
                        </div>
                        <img src={question} alt="Pregunta" className='question' ></img>
                    </div>
                )
            }
            )}

            <ModalDoubt open={openModal} onClose={() => setOpenModal(false)} response={response} />
        </>
    )
}
export default Doubtsinfo;