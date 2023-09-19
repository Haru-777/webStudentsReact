import React, { useEffect, useRef, useState } from 'react';
import '../styles/myacc.scss';
import act from '../assets/logos/acdata.png';
import actxt from '../assets/logos/acdatatxt.png';
import axios from "axios";

const MyaccInfo = () => {
    const form = useRef(null);

    const [schoolAcc, setschoolAcc] = useState([]);
    const [gradeAcc, setgradeAcc] = useState([]);

    const handleLogoutacc = () => {
        localStorage.clear()
        window.location.reload()
    }

    const [formAcc, setFormAcc] = useState({
        nameAcc: '',
        lnameAcc: '',
        emailAcc: '',
        passwordAcc: '',
        cpasswordAcc: '',
        num: '',
        chosegrade: '',
        choseSchool: ''
    });

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3001/api/loadAllSchools',

        }).then(function (response) {
            setschoolAcc(response.data)
        }).catch(function (error) {
            console.log(error)
        })
    }, [])
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3001/api/loadAllGrades',

        }).then(function (response) {
            setgradeAcc(response.data)
        }).catch(function (error) {
            console.log(error)
        })
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormAcc((prevState) => ({
            ...prevState,
            [name]: value
        }));

    };


    const handleBlur = () => {
        const nameacc = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        const lnameacc = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
        const emailacc = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const passacc = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (formAcc.nameAcc === '') {
            setFormAcc((prevState) => ({
                ...prevState,
                nameRError: 'El nombre es obligatorio',
            }));
        }
        else if (!nameacc.test(formAcc.nameAcc)) {
            setFormAcc((prevState) => ({
                ...prevState,
                nameRError: 'Por favor ingrese un nombre válido.'
            }));
        }
        else {
            setFormAcc((prevState => ({
                ...prevState,
                nameRError: ''
            })));
        }

        if (formAcc.lnameAcc === '') {
            setFormAcc((prevState) => ({
                ...prevState,
                lnameRError: 'El apellido es obligatorio'
            }));
        }
        else if (!lnameacc.test(formAcc.lnameAcc)) {
            setFormAcc((prevState) => ({
                ...prevState,
                lnameRError: 'Por favor ingrese un apellido válido.'
            }));
        } else {
            setFormAcc((prevState => ({
                ...prevState,
                lnameRError: ''
            })));
        }

        if (formAcc.emailAcc === '') {
            setFormAcc((prevState) => ({
                ...prevState,
                emailRError: 'El correo electronico es obligatorio'
            }));
        }
        else if (!emailacc.test(formAcc.emailAcc)) {
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

        if (formAcc.passwordAcc === '') {
            setFormAcc((prevState) => ({
                ...prevState,
                passRError: 'La contraseña es obligatoria'
            }));
        }
        else if (!passacc.test(formAcc.passwordAcc)) {
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

        if (formAcc.cpasswordAcc !== formAcc.passwordAcc) {
            setFormAcc((prevState) => ({
                ...prevState,
                cpasswordAccError: 'Las contraseñas no coinciden'
            }));
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const formDatar = new FormData(form.current);
        const data = {
            nameAcc: formDatar.get('nameAcc'),
            lnameAcc: formDatar.get('lnameAcc'),
            emailAcc: formDatar.get('emailAcc'),
            passwordAcc: formDatar.get('passwordAcc'),
            choseSchool: formDatar.get('choseSchool'),
            chosegrade: formDatar.get('chosegrade'),
            num: formDatar.get('num')
            /*choseSchool: formDatar.get('choseSchool'),
            */
        }
        const info_studiante = JSON.parse(localStorage.getItem("login"));
        if (!info_studiante.student) return
        const id_studet = info_studiante.student.id_estudiante;


        axios({
            method: 'post',
            url: 'http://localhost:3001/api/uploadEstudiante',
            data: {
                id_estudiante: id_studet,
                nombre_estudiante: data.nameAcc,
                apellido_estudiante: data.lnameAcc,
                correo_electronico: data.emailAcc, //Quitar esto para un get
                contrasena: data.passwordAcc,
                grado_estudiante: data.choseSchool,
                nombre_colegio: data.chosegrade
            }
        }).then(function (response) {
            /*localStorage.setItem("myacc", JSON.stringify(response.data))
            window.location.reload()*/
            console.log('estudiante actualizado');
        }).catch(function (error) {
            console.log(error)
        })
    };

    return (
        <div className="myacc-container">
            <div className='imac'>
                <img src={actxt} alt="logo" className="mac-logotxt" ></img>
            </div>
            <div className='formacp'>
                <img src={act} alt="logo" className="ac-logo" ></img>
                <div className='fomac'>
                    <form action="/" className="form-acc" id="formAcc" ref={form} onSubmit={handleSubmit}>
                        <div className="inp-actname">
                            <input type="text" placeholder="Nombres" className="inp-actnametxt" id="nameAcc" name="nameAcc"
                                value={formAcc.nameAcc}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            <label htmlFor="name" className="nameact-lab" >Nombres</label>
                            {formAcc.nameRError && (
                                <div className="error-message">{formAcc.nameRError}</div>
                            )}
                        </div>
                        <div className="inp-actlname">
                            <input type="text" placeholder="Apellidos" className="inp-actlnametxt" name="lnameAcc"
                                value={formAcc.lnameAcc}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            <label htmlFor="apellidos" className="lnameact-lab" >Apellidos</label>
                            {formAcc.lnameRError && (
                                <div className="error-message">{formAcc.lnameRError}</div>
                            )}
                        </div>
                        <div className='sh-gr'>
                        <div className="inpact-sch">
                            <label htmlFor="grade" className="schact-lab" >Seleccione su curso:</label>
                            <select className="schact-ch" id="chosegrade" name="chosegrade"

                            >
                                {gradeAcc.map((grade) => (
                                    <option key={grade.id} value={grade.id}>
                                        {grade.nombre_grado}
                                    </option>
                                ))}

                            </select>
                        </div>

                        <div className="inpact-sch">
                            <label htmlFor="school" className="schact-lab" >Seleccione su colegio:</label>
                            <select className="schact-ch" id="choseSchool" name="choseSchool">
                                {schoolAcc.map((school) => (
                                    <option key={school.id} value={school.id}>
                                        {school.nombre_colegio}
                                    </option>
                                ))}
                            </select>
                        </div>
                        </div>
                        <div className="inp-emailact">
                            <input type="email" placeholder="Correo Electronico" className="inp-emailtxtact" name="emailAcc"
                                value={formAcc.emailAcc}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            <label htmlFor="email" className="labelact" >Correo Electronico</label>
                            {formAcc.emailAcc && (
                                <div className="error-message">{formAcc.emailRError}</div>
                            )}
                        </div>
                        <div className="inp-passact">
                            <input type="password" placeholder="Contraseña" className="inp-passtxtact" name="passwordAcc"
                                value={formAcc.passwordAcc}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            <label htmlFor="password" className="labelcxact">Contraseña</label>
                            {formAcc.passwordAcc && (
                                <div className="error-message">{formAcc.passRError}</div>
                            )}
                        </div>
                        <div className="inp-cpassact">
                            <input type="password" placeholder="Confirmar Contraseña" className="inp-cpasstxtact" name="cpasswordAcc"
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            <label htmlFor="password" className="clabelcxact">Confirmar contraseña</label>
                            {formAcc.cpasswordAcc && (
                                <div className="error-message">{formAcc.cpasswordAccError}</div>
                            )}
                        </div>
                        <button type="submit"
                            className="btnact"
                            onClick={handleLogoutacc}
                        >
                            Actualizar
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default MyaccInfo;