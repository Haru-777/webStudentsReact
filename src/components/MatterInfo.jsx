import React, { useState } from 'react';
import '../styles/matterinfo.scss';

const Matterinfo = () => {
    const [matter, setMatter] = useState('');

    const handleClick = () => {
        setMatter('hola mundo');
    }

    return (
        <div className='matterInfo' onClick={handleClick}>
            <h2>Estadistica</h2>
            <p>Grado: </p>
            {matter}
        </div>
    );
}

export default Matterinfo;