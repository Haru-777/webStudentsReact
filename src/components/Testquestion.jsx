import React, { useEffect, useState } from 'react';
import '../styles/testquestion.scss';
import preguntas from '../pages/Preguntas';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ModalPlayQuizz from '../modals/ModalPlayQuizz';

const Testquestion = () => {
    const [actQuestion, setactQuestion] = useState(1);
    const [puntuaciont, setpuntuaciont] = useState(0);
    const [isFinisht, setisFinisht] = useState(false);
    const [restTimet, setrestTimet] = useState(10);
    const [areDisablet, setareDisablet] = useState(false);
    const [responsett, setresponsett] = useState([]);
    const [preguntastLength, setPreguntastLength] = useState([])
    const [respuestast, setRespuestast] = useState([]);
    const [responsem, setresponsem] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const info_questiont = JSON.parse(localStorage.getItem("materia"));
        //if (!info_question.student) return
        const id_tstudet = info_questiont.id_actividad;
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/loadActivity',
            data: {
                id_actividad: id_tstudet,
            
            }

        }).then(function (response) {
            //console.log(response);  
            setresponsett(response.data)
            setRespuestast([response.data[0]['EA'+actQuestion+'1'], response.data[0]['EA'+actQuestion+'2'], response.data[0]['EA'+actQuestion+'3'],response.data[0]['EA'+actQuestion+'4']])
        }).catch(function (error) {
            console.log(error);
        })
    }, [])



    function handleAnswSubmit(isCorrect, e) {
        //puntuacion
        setactQuestion(actQuestion + 1);
        //console.log(acQuestion)
        setPreguntastLength([...preguntastLength,responsett[0]['EQ'+(actQuestion+1)]])
        if(responsett[0]['EQ'+(actQuestion+1)]){
            setRespuestast([responsett[0]['EA'+(actQuestion+1)+'1'], responsett[0]['EA'+(actQuestion+1)+'2'], responsett[0]['EA'+(actQuestion+1)+'3'],responsett[0]['EA'+(actQuestion+1)+'4']])
        }
        else {
            //console.log(responset[0]['Q1'])
            setisFinisht(true);
        }
        setrestTimet(10)
        if (isCorrect) {
            setpuntuaciont(puntuaciont + 1)
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
            if (restTimet > 0) setrestTimet((prev) => prev - 1);
            if (restTimet === 0) setareDisablet(true);
        }, 1000);
        return () => clearInterval(intervalo);
    }, [restTimet]);

    if (isFinisht) { 
        
        const info_acivity = JSON.parse(localStorage.getItem("materia"));
        const id_student = JSON.parse(localStorage.getItem("login"));
        //console.log(info_matter);  const id_materia = info_matter.id_materiaActiva
         const id_acivity = info_acivity.id_actividad;
         const  id_students = id_student.student.id_estudiante
  
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/uploadEventoActual',
            data:{
                id_estudiante: id_students,
                id_actividad: id_acivity,
                paso: "6"
                
            }
            
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
          
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/loadUltimoEvento',
            data:{
                id_estudiante: id_students,
                id_actividad: id_acivity,
                
            }
            
        }).then((responseq) => {
            localStorage.setItem("metricaq", JSON.stringify(responseq.data));
            console.log("metricaq");
            console.log("mentiria");
        }).catch((error) => {
            console.log(error);
        })

    
        return (
            <main className='test-container'>
                <div className='up-cont'></div>
                <h3 className="titulo-result"> Obtuviste {puntuaciont} de {preguntastLength.length}</h3>
                <h1 className="titulo-end"> Finalizaste tu actividad, da click en "Mis Materias" para continuar aprendiendo</h1>
                <button onClick={() => navigate("/mySubjects")} className='pick-btn'>Mis Materias</button>
            </main>
        )
    
} else {
    console.log("fallo enviando evento metrica");
}

    //console.log(preguntasLength.length)

    return (
        <>
            {responsett.map((question, indextt) => {
                return (
                    <div className='test-container' key={indextt}>
                        <div className='up-cont'>
                            <div className='numero-pregunta'>
                                <span>pregunta {actQuestion}</span>
                            </div>
                            <div className='titulo-pregunta'>
                                <h3>{question['EQ'+actQuestion]}</h3>
                            </div>
                        </div>
                        <div className='down-cont'>
                            {respuestast.map((respuesta) => (
                                <button
                                    disabled={areDisablet}
                                    key={respuesta.textoRespuesta}
                                    onClick={(e) => handleAnswSubmit(respuestast.indexOf(respuesta), e)
                                    }>
                                    {respuesta}
                                </button>
                            ))}
                            <div>
                                {!areDisablet ? (
                                    <span className='rest-time'>Tiempo restante: {restTimet} </span>
                                ) : (
                                    <div className='dt'>
                                        <p className='txt-t'>Se ha terminado tu tiempo, porfavor da click en continuar.</p>
                                        <button className='ctn-btn'
                                            onClick={(e) => {
                                                setrestTimet(10);
                                                setareDisablet(false);
                                                handleAnswSubmit(false,e)
                                            }}>
                                            Continuar
                                        </button>
                                    </div>
                                )}
                            </div>

                        </div>
                        <ModalPlayQuizz/>
                    </div>

                )
            })}
        </>
    )
}

export default Testquestion;