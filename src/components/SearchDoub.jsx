import React from 'react';
import '../styles/serach.scss';
import lp from '../assets/logos/loupe.png';

const SearchDoub = ({handleChange}) => {
  
  return (
    <div className='searh'>
        <input  handleChange={handleChange} onChange={(e) => handleChange(e)} type="text" className='inp-searchtxt' placeholder='Buscar pregunta'></input>
        {/* <img src={lp} alt="Buscar" className="search-logo" ></img> */}
    </div>
  )
}

export default SearchDoub;