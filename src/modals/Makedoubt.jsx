import axios from 'axios';
import React, {useRef, useState} from 'react';
import mquest from '../assets/logos/robotPregunta.png';
import '../styles/global.scss';
import '../styles/modalmake.scss';

const Makedoubt = ({ openM, onCloseM }) => {
    const [formQuestion, setformQuestion] = useState({
        question: ''
    });
    const form = useRef(null);
    if (!openM) return null;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setformQuestion((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
       
        const info_lduda = JSON.parse(localStorage.getItem("login"));
        const info_mduda = JSON.parse(localStorage.getItem("idmateria"));
        if(!info_lduda.student && !info_mduda.student) return
        const id_dstudent = info_lduda.student.id_estudiante;
        const id_dmatter = info_mduda[0].id_actividad;
        
        event.preventDefault();
        axios ({
            method: 'post',
            url: 'http://localhost:3001/api//createDuda',
            data: {
                id_estudiante: id_dstudent,
                id_actividad: id_dmatter,
                pregunta: formQuestion.question
            }
        }).then(function(response){
            //localStorage.setItem("lquestion", JSON.stringify(response.data))
            window.location.reload()
        }).catch(function(error){
            console.log(error)
        })
    };
    console.log(    );
    return (
        <div className='overlaym'>

            <div className="modal-mcontainer">
                <div className="mat-mx">
                    <h2 className="letter-mmodal">Realiza tu pregunta.</h2>
                    <p onClick={onCloseM} className="close-btn">X</p>
                </div>
                <div className="lo-tex">
                    <p className='txt-dud' >
                    Ingresa la pregunta para tu profesor/a
                    </p>
                    <div className='q-form'>
                    <img src={mquest} alt="Informacion" className='solve' ></img>
                    <form className='formm'>
                        <input id="question" name="question" className='inp-question' 
                         value={formQuestion.question} onChange={handleChange} placeholder='Escribe tu pregunta aquí.'></input>
                        <button type='submit' onClick={handleSubmit} className='btnsenq'>Enviar Pregunta</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Makedoubt;