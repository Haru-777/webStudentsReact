import React, {  useEffect, useRef, useState  } from 'react';
import '../styles/doubtsinfo.scss';
import ModalDoubt from '../modals/ModalDoubts';
import question from '../assets/logos/qestion.png';
import axios from "axios";

export const Doubtsinfo = () => {
    const [response, setresponse] = useState('');
    const [responseq, setresponseq] = useState('');
    const [matter, setMatter] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const handleclick = ()=>{
        setOpenModal(true); 
        setresponse('holis');
    }
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3001/api/loadDuda',

        }).then(function (response) {
            setresponseq(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }, [])

    return (
        <>
            <div className='doubtsInfo' onClick={() => handleclick()}>
                <div className='info'> 
                    <h2>Referencia pregunta:
                        responseq =  {responseq.id_duda}
                    </h2>
                    <p>Actividad: </p>
                    <p>Estado: </p>
                    {matter}
                </div>
                <img src={question} alt="Pregunta" className='question' ></img>
            </div>
            <ModalDoubt open={openModal} onClose={() => setOpenModal(false)} response = {response} />
        </>
    )
}
export default Doubtsinfo;