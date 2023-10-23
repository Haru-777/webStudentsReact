import React, { useEffect, useState } from 'react';
import '../styles/testquestion.scss';
import preguntas from '../pages/Preguntas';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ModalPlayQuizz from '../modals/ModalPlayQuizz';

const Testquestion = () => {
    const [actQuestion, setactQuestion] = useState(0);
    const [puntuaciont, setpuntuaciont] = useState(0);
    const [isFinisht, setisFinisht] = useState(false);
    const [restTimet, setrestTimet] = useState(10);
    const [areDisablet, setareDisablet] = useState(false);
    const [responsett, setresponsett] = useState([]);
    const [preguntastLength, setPreguntastLength] = useState([])
    //const [respuestast, setRespuestast] = useState([]);
    const [responsem, setresponsem] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const info_questiont = JSON.parse(localStorage.getItem("materia"));
        //if (!info_question.student) return
        const id_tstudet = info_questiont.id_actividad;
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = '¿Seguro que quieres recargar la página?';
        };

        axios({
            method: 'post',
            url: 'http://localhost:3001/api/loadActivity',
            data: {
                id_actividad: id_tstudet,

            }

        }).then(function (response) {
            //console.log(response, 'hola');
            setresponsett(response.data)
            //setRespuestast([response.data[0]['EA' + actQuestion + '1'], response.data[0]['EA' + actQuestion + '2'], response.data[0]['EA' + actQuestion + '3'], response.data[0]['EA' + actQuestion + '4']])
        }).catch(function (error) {
            console.log(error);
        })
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        }
    }, [])



    function handleAnswSubmit(isCorrect, e) {
        //puntuacion
        setactQuestion(actQuestion + 1);
        if (isCorrect) {
            setpuntuaciont(puntuaciont + 1);
        }

        if (actQuestion >= responsett[0]?.questions.length - 1) {
            setisFinisht(true);
        } else {
            setrestTimet(10);
            setareDisablet(false);
        }

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
    };

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
        const id_students = id_student.student.id_estudiante;
        var noteTest = ((puntuaciont * 5) / preguntastLength.length);

        axios({
            method: 'post',
            url: 'http://localhost:3001/api/uploadEventoActual',
            data: {
                id_estudiante: id_students,
                id_actividad: id_acivity,
                paso: "6",
                score_Ea: noteTest

            }

        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })

        axios({
            method: 'post',
            url: 'http://localhost:3001/api/loadUltimoEvento',
            data: {
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
            {actQuestion < responsett[0]?.questions.length ? (
                <div className='test-container'>
                    <div className='up-cont'>
                        <div className='numero-pregunta'>
                            <span>pregunta {actQuestion + 1}</span>
                        </div>
                        <div className='titulo-pregunta'>
                            <h3>{responsett[0]?.questions[actQuestion].question}</h3>
                        </div>
                    </div>
                    <div className='down-cont'>
                        {responsett[0]?.questions[actQuestion].options.map((option, optionIndex) => (
                            <button
                                disabled={areDisablet}
                                key={optionIndex}
                                onClick={() => handleAnswSubmit(option.id === responsett[0]?.questions[actQuestion].correct)}
                            >
                                {option.question}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <p>¡Has completado el cuestionario!</p>
                    {/* Puedes mostrar un mensaje o realizar una acción aquí */}
                </div>
            )}
        </>
    )
            }    

export default Testquestion;