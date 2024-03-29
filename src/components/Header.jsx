import React, { useState } from 'react';

const Header =() => {
    const[darkMode, setdarkMode] = useState(false);

const handleClick = () => {
    setdarkMode(!darkMode);
}
    return(
        <div className='Header'>
            <h1>React Hooks</h1>
            <button type='button' onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
    );
}

export default Header;