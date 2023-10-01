import React from 'react';
import '../styles/matterinfo.scss';
import ProgressBar from './ProgressBar';

export const AvtivityInfo = () => {
    return (
        <div className='matterInfo'>
            <h2>Actividad: </h2>
            <p>Nota Actividad: </p>
            <p>Nota Quizz: </p>
            <p>Nota Evaluación: </p>
            <div>
                <ProgressBar />
            </div>
        </div>
    );
}
export default AvtivityInfo;