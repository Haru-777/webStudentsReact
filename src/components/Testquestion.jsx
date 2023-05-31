import React, { useEffect, useState } from 'react';
import '../styles/testquestion.scss';
import preguntas from '../pages/Preguntas';

const Testquestion = () => {
    const [acQuestion, setacQuestion] = useState(0);
    const [puntuacion, setpuntuacion] = useState(0);
    const [isFinish, setisFinish] = useState(false);

    function handleAnswSubmit(isCorrect, e){
        //puntuacion
        if(isCorrect) setpuntuacion(puntuacion + 1);
        //estilos
        e.target.classList.add(isCorrect ? "correct" : "incorrect")

    }


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
                    key={respuesta.textoRespuesta} 
                    onClick={(e) => handleAnswSubmit(respuesta.isCorrect, e)}>
                        {respuesta.textoRespuesta}
                    </button>
                ))}

            </div>
        </div>
    )
}

export default Testquestion;