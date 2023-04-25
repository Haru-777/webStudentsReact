import React from 'react';
import Layaout from '../containers/Layout';
//import Login from '../containers/Login';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




const App = () => {
    return (
        <BrowserRouter>
        <Layaout>
        <Routes>
            <Route exact path='/login' element ={ <Login/>} />
            <Route exact path="/" element = { <Home/>}/>
            <Route path="*" element = {<NotFound/> } />
        </Routes>
        </Layaout>
        </BrowserRouter>
    );
}

export default App;
