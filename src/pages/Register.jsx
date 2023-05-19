import React, { useRef, useState } from "react";
import '../styles/register.scss';
import '../styles/global.scss';
import reglogo from '../assets/logos/regssma.png';
import txtreg from '../assets/logos/regtxt.png'

const Register = () => {
    const form = useRef(null);

    const [formReg, setFormReg] = useState({
        nameReg: '',
        lnameReg: '',
        emailReg: '',
        passwordReg: '',
        cpasswordReg: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormReg((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleBlur = () => {
        const namereg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        const lnamereg = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
        const emailreg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const passreg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


        if (!namereg.test(formReg.nameReg)){
            setFormReg((prevState) => ({
                ...prevState,
                nameRError: 'Por favor ingerse un nombre válido.'
            }));
        }else {
            setFormReg((prevState => ({
                ...prevState,
                nameRError: ''
            })));
        }
        if (!lnamereg.test(formReg.lnameReg)){
            setFormReg((prevState) => ({
                ...prevState,
                lnameRError: 'Por favor ingerse un apellido válido.'
            }));
        }else {
            setFormReg((prevState => ({
                ...prevState,
                lnameRError: ''
            })));
        }
        if (!emailreg.test(formReg.emailReg)) {
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
        if (!passreg.test(formReg.passwordReg)) {
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
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (formReg.nameReg.trim() === '') {
            console.log('El Nombre es Obligatorio');
            return;
        }
        if (formReg.lnameReg.trim() === '') {
            console.log('El Apellido es Obligatorio');
            return;
        }
        if (formReg.emailReg.trim() === '') {
            console.log('El email es Obligatorio');
            return;
        }
        if(formReg.passwordReg.trim() === ''){
            console.log('La contraseña es obligatoria');
            return
        }
        if (formReg.passwordReg !== formReg.cpasswordReg) {
            console.log("las contraseñas no coinciden");
            return;
          }

        const formData = new FormData(form.current);
        const data = {
            namereg: formData.get('namer'),
            lnamereg: formData.get('lnamer'),
            emailreg: formData.get('emailr'),
            passwordreg: formData.get('passwordr'),
            cpasswordreg: formData.get('cpasswordr')
        }
        console.log(data);
    };

    return (
        <div className="Bottom">
            <div className="Register-container">
                <img src={reglogo} alt="logo" className="reg-logo" ></img>
                <form action="/" className="form-ref" id="form-ref" ref={form} onSubmit={handleSubmit}>
                    <div className="inp-name">
                        <input type="text"  placeholder="Nombres" className="inp-nametxt" name="nameReg"
                        value={formReg.nameReg} 
                        onChange={handleChange}
                        onBlur = {handleBlur}/>
                        <label htmlFor="name" className="name-lab" >Nombres</label>
                        {formReg.nameReg.trim () === '' && (
                            <div className="error-message"> El nombre es obligatorio</div>
                        )}
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
                        {formReg.lnameReg.trim()  === '' && (
                            <div className="error-message">El apellido es obligatorio</div>
                        )}
                        {formReg.lnameRError && (
                            <div className="error-message">{formReg.lnameRError}</div>
                        )}
                        </div>
                    <div className="inp-sch">
                        <label htmlFor="school" className="sch-lab" >Seleccione su colegio:</label>
                        <select className="sch-ch" id="choseSchool">
                            <option value="volvo">Colegio 1</option>
                            <option value="saab">Colegio 2</option>
                            <option value="mercedes">Colegio 1</option>
                        </select>
                    </div>
                    <div className="inp-emailreg">
                        <input type="email" placeholder="Correo Electronico" className="inp-emailtxtreg" name="emailReg"
                        value={formReg.emailReg}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                        <label htmlFor="email" className="labelreg" >Correo Electronico</label>
                        {formReg.emailReg.trim()  === '' && (
                            <div className="error-message">El email es obligatorio</div>
                        )}
                        {formReg.emailRError && (
                            <div className="error-message">{formReg.emailRError}</div>
                        )}
                    </div>
                    <div className="inp-passreg">
                        <input type="password" placeholder="Contraseña" className="inp-passtxtreg" name="passwordReg"
                        value={formReg.passwordReg}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                        <label htmlFor="password" className="labelcxreg">Contraseña</label>
                        {formReg.passwordReg.trim()  === '' && (
                            <div className="error-message">La contraseña es obligatoria</div>
                        )}
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
                        {formReg.cpasswordReg && (
                            <div className="error-message">{formReg.cpasswordReg}</div>
                        )}
                    </div>
                    <button type="submit"
                    className="btnlogin"
                     onClick={handleSubmit}
                     disabled ={formReg.emailError !== '' }>
                        Registrarse
                    </button>

                </form>
            </div>
        </div >
    );
}

export default Register;