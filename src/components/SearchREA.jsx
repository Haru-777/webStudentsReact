import React from 'react';
import '../styles/serach.scss';

const SearchREA = ({handleChange}) => {
    return (
        <div className='searh'>
            <input handleChange={handleChange} onChange={(e) => handleChange(e)} type="text" className='inp-searchtxt' placeholder='Buscar Actividad'></input>
            {/* <img src={lp} alt="Buscar" className="search-logo" ></img> */}
        </div>
    )
}

export default SearchREA;
