import React, { useEffect, useRef, useState } from "react";
import '../styles/register.scss';
import '../styles/global.scss';
import reglogo from '../assets/logos/regssma.png';
import axios from "axios";


const Register = () => {

    const form = useRef(null);    
    const [schoolReg, setschoolReg] = useState([]); 
    const [gradesReg, setgradesReg] = useState([]);
    const [checked, setChecked] = useState(false);
    
    const [formReg, setFormReg] = useState({
        nameReg: '',
        lnameReg: '',
        emailReg: '',
        passwordReg: '',
        cpasswordReg: '',
        chosegrade: '',
        choseSchool: ''

    });


    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3001/api/loadAllSchools',

        }).then(function (response) {
            setschoolReg(response.data)
        }).catch(function (error) {
            console.log(error)
        })
    }, [])
    console.log(schoolReg);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3001/api/loadAllGrades',

        }).then(function (response) {
            setgradesReg(response.data)
        }).catch(function (error) {
            console.log(error)
        })
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormReg((prevState) => ({
            ...prevState,
            [name]: value
        }));

        /*axios(config)
        .then((res) => {
          if (res.data.res === false) {
            this.setState({
              validForm: false,
              error: "Correo electrónico existente",
            });
          } else {
            this.setState({
              validForm: null,
              error: "",
            });
          }
        })
        .catch((err) => {});
    }*/
    };


    const handleBlur = () => {
        const namereg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        const lnamereg = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
        const emailreg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const passreg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (formReg.nameReg === '') {
            setFormReg((prevState) => ({
                ...prevState,
                nameRError: 'El nombre es obligatorio'
            }));
        }
        else if (!namereg.test(formReg.nameReg)) {
            setFormReg((prevState) => ({
                ...prevState,
                nameRError: 'Por favor ingrese un nombre válido.'
            }));
        } else {
            setFormReg((prevState => ({
                ...prevState,
                nameRError: ''
            })));
        }
        if(formReg.lnameReg === '') {
            setFormReg((prevState) => ({
                ...prevState,
                lnameRError: 'El apellido es obligatorio'
            }));
        }
        else if (!lnamereg.test(formReg.lnameReg)) {
            setFormReg((prevState) => ({
                ...prevState,
                lnameRError: 'Por favor ingrese un apellido válido.'
            }));
        } else {
            setFormReg((prevState => ({
                ...prevState,
                lnameRError: ''
            })));
        }
        if(formReg.emailReg.trim() === ''){
            setFormReg((prevState) => ({
                ...prevState,
                emailRError:'El correo es obligatorio'
            }));
        }
        else if (!emailreg.test(formReg.emailReg)) {
            setFormReg((prevState) => ({
                ...prevState,
                emailRError: 'Por favor ingrese una dirección de correo electrónico válida.'
            }));
        } else {
            setFormReg((prevState => ({
                ...prevState,
                emailRError: ''
            })));
        }
        if (formReg.passwordReg === ''){
            setFormReg((prevState) => ({
                ...prevState,
                passRError: 'La contraseña es obligatoria'
            }));
        }
        else if (!passreg.test(formReg.passwordReg)) {
            setFormReg((prevState) => ({
                ...prevState,
                passRError: 'Por favor ingrese una contraseña de 8 Caracteres, la menos un número y una letra.'
            }));
        } else {
            setFormReg((prevState => ({
                ...prevState,
                passRError: ''
            })));
        }
        if(formReg.cpasswordReg.trim() !== formReg.passwordReg ){
            setFormReg((prevState => ({
                ...prevState,
                cpasswordRegError: 'Las contraseñas no coinciden'
            })));
        }
        else {
            setFormReg((prevState => ({
                ...prevState,
                cpasswordRegError:''
            })));
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        const formDatar = new FormData(form.current);
        const data = {
            nameReg: formDatar.get('nameReg'),
            lnameReg: formDatar.get('lnameReg'),
            emailReg: formDatar.get('emailReg'),
            passwordReg: formDatar.get('passwordReg'),
            choseSchool: formDatar.get('choseSchool'),
            chosegrade: formDatar.get('chosegrade')
        }
        console.log(data);

        axios({
            method: 'post',
            url: 'http://localhost:3001/api/createEstudiante',
            data: {
                nombre_estudiante: data.nameReg,
                apellido_estudiante: data.lnameReg,
                correo_electronico: data.emailReg, //Quitar esto para un get
                contrasena: data.passwordReg,
                grado_estudiante:data.chosegrade,
                id_colegio:data.choseSchool

            }
        }).then(function (response) {
            /*localStorage.setItem("register", JSON.stringify(response.data))//guarda en el local storege
            window.location.reload()*/
            console.log('Registro exitoso');
        }).catch(function (error) {
            console.log(error)
        }) 

    };
     const btndisabled = () =>{
         if(formReg.nameRError || formReg.lnameRError || formReg.emailRError || formReg.passRError || formReg.cpasswordRegError) return(true);
         else if (formReg.namereg === "" || formReg.lnameReg === '' || formReg.emailReg === "" || formReg.passwordReg === "" || formReg.cpasswordReg === "") return(true);
         else return(false);
     }
    return (
        <div className="Bottom">
            <div className="Register-container">
                <img src={reglogo} alt="logo" className="reg-logo" ></img>
                <form action="/" className="form-ref" id="formReg" ref={form} onSubmit={handleSubmit}>
                    <div className="inp-name">

                        <input type="text" placeholder="Nombres" className="inp-nametxt" id="nameReg" name="nameReg"
                            value={formReg.nameReg}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                        <label htmlFor="name" className="name-lab" >Nombres</label>
                        {formReg.nameRError && (
                            <div className="error-message">{formReg.nameRError}</div>
                        )}
                    </div>
                    <div className="inp-lname">
                        <input type="text" placeholder="Apellidos" className="inp-lnametxt" name="lnameReg"
                            value={formReg.lnameReg}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                        <label htmlFor="apellidos" className="lname-lab" >Apellidos</label>
                        {formReg.lnameRError && (
                            <div className="error-message">{formReg.lnameRError}</div>
                        )}
                    </div>
                    <div className="inp-sch">
                        <label htmlFor="grade" className="sch-lab" >Seleccione su curso:</label>
                        <select className="sch-ch" id="chosegrade" name="chosegrade"

                        >
                            {gradesReg.map((grade) => (
                                <option key={grade.id} value={grade.id}>
                                    {grade.id_grado}
                                </option>
                            ))}

                        </select>
                    </div>
                    <div className="inp-sch">
                        <label htmlFor="school" className="sch-lab" >Seleccione su colegio:</label>
                        <select className="sch-ch" id="choseSchool" name="choseSchool">
                            {schoolReg.map((school) => (
                                <option key={school.id} value={school.id_colegio}>
                                    {school.nombre_colegio}
                                </option>
                            ))}

                        </select>
                    </div>
                    <div className="inp-emailreg">
                        <input type="email" placeholder="Correo Electronico" className="inp-emailtxtreg" name="emailReg"
                            value={formReg.emailReg}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                        <label htmlFor="email" className="labelreg" >Correo Electronico</label>
                        {formReg.emailRError && (
                            <div className="error-message">{formReg.emailRError}</div>
                        )}
                    </div>
                    <div className="inp-passreg">
                        <input type="password" placeholder="Contraseña" className="inp-passtxtreg" name="passwordReg"
                            value={formReg.passwordReg}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                        <label htmlFor="password" className="labelcxreg">Contraseña</label>
                        {formReg.passRError && (
                            <div className="error-message">{formReg.passRError}</div>
                        )}
                    </div>
                    <div className="inp-cpassreg">
                        <input type="password" placeholder="Confirmar Contraseña" className="inp-cpasstxtreg" name="cpasswordReg"
                            value={formReg.cpasswordReg}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                        <label htmlFor="password" className="clabelcxreg">Confirmar contraseña</label>
                            {formReg.cpasswordRegError && (
                                <div className="error-message">{formReg.cpasswordRegError}</div>
                            )}
                        
                    </div>
                    <div>
                        <input type="checkbox" checked={checked}
                            onChange={e => setChecked(e.target.checked)} className="checkregister" />
                        <label htmlFor="terminos" className="txtchregister">Acepto terminos y condiciones</label>
                    </div>
                    <button type="submit"
                        className="btnlogin"
                        disabled = {btndisabled()}
                        onClick={handleSubmit}
                        >

                        Registrarse
                    </button>

                </form>
            </div>
        </div >
    );
}

export default Register;