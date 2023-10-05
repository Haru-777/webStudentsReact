import React from 'react';
import { useNavigate } from 'react-router-dom';

const BtnNavQuizz = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate("/test")} className='btn-modalqt'>Realiza el TEST</button>
        </div>
    )
}

export default BtnNavQuizz;