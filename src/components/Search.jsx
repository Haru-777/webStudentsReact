import React from 'react';
import '../styles/serach.scss';
import lp from '../assets/logos/loupe.png';

const Search = () => {
  return (
    <div className='searh'>
        <input type="text" className='inp-searchtxt' placeholder='Buscar'></input>
        <img src={lp} alt="Buscar" className="search-logo" ></img>
    </div>
  )
}

export default Search;