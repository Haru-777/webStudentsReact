import React, { useEffect, useState } from 'react';
import '../styles/testquestion.scss';
import preguntas from '../pages/Preguntas';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Quizzquestion = () => {
    const [acQuestion, setacQuestion] = useState(1);
    const [puntuacion, setpuntuacion] = useState(0);
    const [isFinish, setisFinish] = useState(false);
    const [restTime, setrestTime] = useState(10);
    const [areDisable, setareDisable] = useState(false);
    const [responset, setresponset] = useState([]);
    const [preguntasLength, setPreguntasLength] = useState([])
    const [respuestas, setRespuestas] = useState([]);
    const [responsem, setresponsem] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const info_question = JSON.parse(localStorage.getItem("materia"));
        //if (!info_question.student) return
        const id_qstudet = info_question.id_actividad;
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/loadActivity',
            data: {
                id_actividad: id_qstudet,
            
            }

        }).then(function (response) {
            //console.log(response);  
            setresponset(response.data)
            setRespuestas([response.data[0]['A'+acQuestion+'1'], response.data[0]['A'+acQuestion+'2'], response.data[0]['A'+acQuestion+'3'],response.data[0]['A'+acQuestion+'4']])
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
                paso: "5"

                
            }
            
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }, [])




    function handleAnswSubmit(isCorrect, e) {
        //puntuacion
        setacQuestion(acQuestion + 1);
        //console.log(acQuestion)
        setPreguntasLength([...preguntasLength,responset[0]['Q'+(acQuestion+1)]])
        if(responset[0]['Q'+(acQuestion+1)]){
            setRespuestas([responset[0]['A'+(acQuestion+1)+'1'], responset[0]['A'+(acQuestion+1)+'2'], responset[0]['A'+(acQuestion+1)+'3'],responset[0]['A'+(acQuestion+1)+'4']])
        }
        else {
            //console.log(responset[0]['Q1'])
            setisFinish(true);
        }
        setrestTime(10)
        if (isCorrect) {
            setpuntuacion(puntuacion + 1)
        };

        //estilos
        //e.target.classList.add(isCorrect + 1 === responset[0]['CA'+ acQuestion] ? "correct" : "incorrect");
        //cambiar a la sg pregunta

        /* setTimeout(() => {
            if (acQuestion === preguntas.length - 1) {
                setisFinish(true);
            }
            else {
                setacQuestion(acQuestion + 1);

            }
        }, 1000); */
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            if (restTime > 0) setrestTime((prev) => prev - 1);
            if (restTime === 0) setareDisable(true);
        }, 1000);
        return () => clearInterval(intervalo);
    }, [restTime]);

    if (isFinish) { 
        
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
                    paso: "3"
                    
                }
                
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
            return (
                <main className='test-container'>
                    <div className='up-cont'></div>
                    <h3 className="titulo-result"> Obtuviste {puntuacion} de {preguntasLength.length}</h3>
                    <button onClick={() => navigate("/mySubjects")} className='pick-btn'>Volver a mis materias</button>
                </main>
            )
        
    } else {
        console.log("fallo enviando evento metrica");
    }
        
       
    //console.log(preguntasLength.length)

    return (
        <>
            {responset.map((question, indext) => {
                return (
                    <div className='test-container' key={indext}>
                        <div className='up-cont'>
                            <div className='numero-pregunta'>
                                <span>pregunta {acQuestion}</span>
                            </div>
                            <div className='titulo-pregunta'>
                                <h3>{question['Q'+acQuestion]}</h3>
                            </div>
                        </div>
                        <div className='down-cont'>
                            {respuestas.map((respuesta) => (
                                <button
                                    disabled={areDisable}
                                    key={respuesta.textoRespuesta}
                                    onClick={(e) => handleAnswSubmit(respuestas.indexOf(respuesta), e)
                                    }>
                                    {respuesta}
                                </button>
                            ))}
                            <div>
                                {!areDisable ? (
                                    <span className='rest-time'>Tiempo restante: {restTime} </span>
                                ) : (
                                    <div className='dt'>
                                        <p className='txt-t'>Se ha terminado tu tiempo, porfavor da click en continuar.</p>
                                        <button className='ctn-btn'
                                            onClick={(e) => {
                                                setrestTime(10);
                                                setareDisable(false);
                                                handleAnswSubmit(false,e)
                                            }}>
                                            Continuar
                                        </button>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                )
            })}
        </>
    )
}

export default Quizzquestion;