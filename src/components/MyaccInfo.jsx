import React from 'react';
import '../styles/myacc.scss';
import act from '../assets/logos/acdata.png';

const MyaccInfo = () => {
    return (
        <div className="myacc-container">
            <div className='imac'>
                <img src={act} alt="logo" className="ac-logo" ></img>
            </div>
            <div className='fomac'>
                <form action="/" className="form-acc" id="form-ref" >
                    <div className="inp-emailac">
                        <input type="email" placeholder="Correo Electronico" className="inp-emailtxtac" name="emailReg"
                        />
                        <label htmlFor="email" className="labelac" >Correo Electronico</label>
                    </div>
                    <div className="inp-passac">
                        <input type="password" placeholder="Contraseña" className="inp-passtxtac" name="passwordReg"
                        />
                        <label htmlFor="password" className="labelcxac">Contraseña</label>

                    </div>
                    <div className="inp-cpassac">
                        <input type="password" placeholder="Confirmar Contraseña" className="inp-cpasstxtac" name="cpasswordReg"
                        />
                        <label htmlFor="password" className="clabelcxac">Confirmar contraseña</label>

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