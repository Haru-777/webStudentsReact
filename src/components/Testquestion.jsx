import React, { useEffect, useState } from 'react';
import '../styles/testquestion.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Testquestion = () => {
    const [actQuestion, setActQuestion] = useState(0);
    const [puntuaciont, setPuntuaciont] = useState(0);
    const [isFinisht, setIsFinisht] = useState(false);
    const [restTimet, setRestTimet] = useState(10);
    const [areDisablet, setAreDisablet] = useState(false);
    const [responsett, setResponsett] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const info_questiont = JSON.parse(localStorage.getItem("materia"));
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
            setResponsett(response.data);
        }).catch(function (error) {
            console.log(error);
        });

        const info_acivity = JSON.parse(localStorage.getItem("materia"));
        const id_student = JSON.parse(localStorage.getItem("login"));
        const id_acivity = info_acivity.id_actividad;
        const id_students = id_student.student.id_estudiante;
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/uploadEventoActual',
            data: {
                id_estudiante: id_students,
                id_actividad: id_acivity,
                paso: "9"
            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });


        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        }
    }, []);

    function handleAnswSubmit(isCorrect, e) {
        if (e) {
            setActQuestion(actQuestion + 1);

            const selectedAnswerId = e.target.id;

            setSelectedAnswers([...selectedAnswers, selectedAnswerId]);

            if (isCorrect) {
                setPuntuaciont(puntuaciont + 1);
            }

            if (actQuestion >= responsett[0]?.questions.length - 1) {
                setIsFinisht(true);
            } else {
                setRestTimet(10);
                setAreDisablet(false);
            }
        }
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            if (restTimet > 0) setRestTimet((prev) => prev - 1);
            if (restTimet === 0) setAreDisablet(true);
        }, 1000);
        return () => clearInterval(intervalo);
    }, [restTimet]);

    if (isFinisht) {
        const info_acivity = JSON.parse(localStorage.getItem("materia"));
        const id_student = JSON.parse(localStorage.getItem("login"));
        const id_acivity = info_acivity.id_actividad;
        const id_students = id_student.student.id_estudiante;
        const noteTest = ((puntuaciont * 5) / responsett[0]?.questions.length);

        axios({
            method: 'post',
            url: 'http://localhost:3001/api/uploadEventoActual',
            data: {
                id_estudiante: id_students,
                id_actividad: id_acivity,
                paso: "6",
                score_Ea: noteTest,
                answers: selectedAnswers
            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });

        axios({
            method: 'post',
            url: 'http://localhost:3001/api/loadUltimoEvento',
            data: {
                id_estudiante: id_students,
                id_actividad: id_acivity,
            }
        }).then((responseq) => {
            localStorage.setItem("metricaq", JSON.stringify(responseq.data));
        }).catch((error) => {
            console.log(error);
        });

        return (
            <main className='test-container'>
                <div className='up-cont'></div>
                <h3 className="titulo-result"> Obtuviste {puntuaciont} de {responsett[0]?.questions.length}</h3>
                <h1 className="titulo-end"> Finalizaste tu actividad, da click en "Mis Materias" para continuar aprendiendo</h1>
                <button onClick={() => navigate("/mySubjects")} className='pick-btn'>Mis Materias</button>
            </main>
        );
    }

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
                                id={option.id}
                                onClick={(e) => handleAnswSubmit(option.id === responsett[0]?.questions[actQuestion].correct, e)}
                            >
                                {option.question}
                            </button>
                        ))}
                        <div>
                            {!areDisablet ? (
                                <span className='rest-time'>Tiempo restante: {restTimet} </span>
                            ) : (
                                <div className='dt'>
                                    <p className='txt-t'>Se ha terminado tu tiempo, por favor da click en continuar.</p>
                                    <button className='ctn-btn'
                                        onClick={(e) => {
                                            setRestTimet(10);
                                            setAreDisablet(false);
                                            handleAnswSubmit(false, e);
                                        }}>
                                        Continuar
                                    </button>
                                </div>
                            )}
                        </div>
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
