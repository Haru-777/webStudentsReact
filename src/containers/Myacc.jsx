import React from 'react';
import MyaccInfo from '../components/MyaccInfo';
import '../styles/global.scss';
import actxt from '../assets/logos/acdatatxt.png';

const Myacc = () => {
  return (
    <div className='Bottom'>
        <img src={actxt} alt="logo" className="ac-logotxt" ></img>
        <MyaccInfo/>
    </div>
  )
}

export default Myacc;