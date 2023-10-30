import React, { useEffect, useState } from 'react';
import '../styles/matterinfo.scss';
import ProgressBar from './ProgressBar';
import axios from 'axios';

export const AvtivityInfo = () => {

    const [response, setresponse] = useState([]);
    const [error, setError] = useState(" ");
    useEffect(() => {
        const id_student = JSON.parse(localStorage.getItem("login"));
        //console.log(info_matter);
        if (!id_student) return
        const id_students = id_student.student.id_estudiante
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_BACKEND_URL}/api/progreso`,
            data: {
                id_estudiante: id_students,
            }
        }).then((response) => {
            setresponse(response.data)
            console.log(response.data);
        }).catch((error) => {
            setError(error.response.data.message);
        })
    }, [])
    return (
        <>
            {response.map((progress, indexp) => {
                return (
                    <>
                        <div className='matterInfo' key={indexp}>
                            <h2>Actividad: {progress.titulo_actividad} </h2>
                            <p>Nota Actividad: {progress.score_actividad} </p>
                            <p>Nota Quizz: {progress.score_a}</p>
                            <p>Nota Evaluación: {progress.score_Ea} </p>
                            <div>
                                <div className='childdiv' style={{ width: `${progress.progreso * 100}%` }} >
                                    <span className='progresstext' >{`${progress.progreso*100}%`}</span>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    );
}
export default AvtivityInfo;