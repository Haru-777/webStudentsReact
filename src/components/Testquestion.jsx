import React, { useEffect, useState } from 'react';
import '../styles/testquestion.scss';
import preguntas from '../pages/Preguntas';
import { useNavigate } from 'react-router-dom';

const Testquestion = () => {
    const [acQuestion, setacQuestion] = useState(0);
    const [puntuacion, setpuntuacion] = useState(0);
    const [isFinish, setisFinish] = useState(false);
    const [restTime, setrestTime] = useState(10);
    const [areDisable, setareDisable] = useState(false);
    const navigate = useNavigate();

    function handleAnswSubmit(isCorrect, e) {
        //puntuacion  
        setrestTime(10)      
        if (isCorrect) {
            setpuntuacion(puntuacion + 1)
        };
        if (acQuestion === preguntas.length - 1) {
            setisFinish(true);
        }
        else {
            setacQuestion(acQuestion + 1);

        }

        //estilos
        e.target.classList.add(isCorrect ? "correct" : "incorrect");
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

    if (isFinish) return (
        <main className='test-container'>
            <div className='up-cont'></div>
            <h3 className ="titulo-result"> Obtuviste {puntuacion} de {preguntas.length}</h3>
            <button onClick={() => navigate("/classActy")} className='pick-btn'>Practica en Clase</button>
            <button onClick={() => navigate("/test")} className='pick-btn'>Realiza tu Examen</button>
        </main>
    )


    return (
        <div className='test-container'>
            <div className='up-cont'>
                <div className='numero-pregunta'>
                    <span>pregunta {acQuestion + 1} de</span> {preguntas.length}
                </div>
                <div className='titulo-pregunta'>
                    <h3>{preguntas[acQuestion].titulo}</h3>
                </div>
            </div>
            <div className='down-cont'>
                {preguntas[acQuestion].opciones.map((respuesta) => (
                    <button
                        disabled={areDisable}
                        key={respuesta.textoRespuesta}
                        onClick={(e) => handleAnswSubmit(respuesta.isCorrect, e)
                        }>
                        {respuesta.textoRespuesta}
                    </button>
                ))}
                <div>
                    {!areDisable ? (
                        <span className='rest-time'>Tiempo restante: {restTime} </span>
                    ) : (
                        <div className='dt'>
                            <p className='txt-t'>Se ha terminado tu tiempo, porfavor da click en continuar.</p>
                            <button className='ctn-btn'
                                onClick={() => {
                                    setrestTime(10);
                                    setareDisable(false);
                                    setacQuestion(acQuestion + 1);
                                }}>
                                Continuar
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Testquestion;