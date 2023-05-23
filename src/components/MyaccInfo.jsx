import React, { useRef, useState } from 'react';
import '../styles/myacc.scss';
import act from '../assets/logos/acdata.png';

const MyaccInfo = () => {
    const form = useRef(null);

    const [checked, setChecked] = useState(false);

    const [formAcc, setFormAcc] = useState({
        emailAcc: '',
        passwordAcc: '',
        cpasswordAcc: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormAcc((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleBlur = () => {
        const emailacc = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const passacc = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (!emailacc.test(formAcc.emailAcc)) {
            setFormAcc((prevState) => ({
                ...prevState,
                emailRError: 'Por favor ingrese una dirección de correo electrónico válida.'
            }));
        } else {
            setFormAcc((prevState => ({
                ...prevState,
                emailRError: ''
            })));
        }
        if (!passacc.test(formAcc.passwordAcc)) {
            setFormAcc((prevState) => ({
                ...prevState,
                passRError: 'Por favor ingrese una contraseña de 8 Caracteres, la menos un número y una letra.'
            }));
        } else {
            setFormAcc((prevState => ({
                ...prevState,
                passRError: ''
            })));
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const formDatar = new FormData(form.current);
        const data = {
            emailAcc: formDatar.get('emailAcc'),
            passwordAcc: formDatar.get('passwordAcc'),
            /*choseSchool: formDatar.get('choseSchool'),
            */

        }
        console.log(data);
    };

    return (
        <div className="myacc-container">
            <div className='imac'>
                <img src={act} alt="logo" className="ac-logo" ></img>
            </div>
            <div className='fomac'>
                <form action="/" className="form-acc" id="formAcc" ref={form} onSubmit={handleSubmit}>
                    <div className="inp-sch">
                        <label htmlFor="school" className="sch-lab" >Seleccione su colegio:</label>
                        <select className="sch-ch" id="choseSchool" name="choseSchool">
                            <option value="volvo">Colegio 1</option>
                            <option value="saab">Colegio 2</option>
                            <option value="mercedes">Colegio 1</option>
                        </select>
                    </div>
                    <div className="inp-emailac">
                        <input type="email" placeholder="Correo Electronico" className="inp-emailtxtac" name="emailAcc"
                            value={formAcc.emailAcc}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                        <label htmlFor="email" className="labelac" >Correo Electronico</label>
                        {formAcc.emailAcc.trim() === '' && (
                            <div className="error-message"> El correo es obligatorio</div>
                        )}
                        {formAcc.emailAcc && (
                            <div className="error-message">{formAcc.emailRError}</div>
                        )}
                    </div>
                    <div className="inp-passac">
                        <input type="password" placeholder="Contraseña" className="inp-passtxtac" name="passwordAcc"
                            value={formAcc.passwordAcc}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                        <label htmlFor="password" className="labelcxac">Contraseña</label>
                        {formAcc.passwordAcc.trim() === '' && (
                            <div className="error-message"> La contraseña es obligatoria</div>
                        )}
                        {formAcc.passwordAcc && (
                            <div className="error-message">{formAcc.passRError}</div>
                        )}
                    </div>
                    <div className="inp-cpassac">
                        <input type="password" placeholder="Confirmar Contraseña" className="inp-cpasstxtac" name="cpasswordAcc"
                            onChange={handleChange}
                            onBlur={handleBlur} />
                        <label htmlFor="password" className="clabelcxac">Confirmar contraseña</label>
                        {formAcc.cpasswordAcc.trim() !== formAcc.passwordAcc && (
                            <div className="error-message">Las contraseñas no coinciden</div>
                        )}
                    </div>
                    <button type="submit"
                        className="btnac"
                    >
                        Actualizar
                    </button>

                </form>
            </div>
        </div>
    );
}

export default MyaccInfo;