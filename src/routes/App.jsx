import React from 'react';
import Layaout from '../containers/Layout';
//import Login from '../containers/Login';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Activitys from '../pages/Activityes';
import Doubts from '../pages/Doubts';
import Downloads from '../pages/Downloads';
import Guest from '../pages/Guest';
import MyAcount from '../pages/MyAcount';
import MyCourses from '../pages/MyCourses';
import Rea from '../pages/Rea';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import '../styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




const App = () => {
    return (
        <BrowserRouter>
        <Layaout>
        <Routes>
            <Route exact path='/login' element ={ <Login/>} />
            <Route exact path='/activitys' element ={<Activitys/>} />
            <Route exact path='/doubts' element ={ <Doubts/>} />
            <Route exact path='/downloads' element ={ <Downloads/>} />
            <Route exact path='/guest' element ={ <Guest/>} />
            <Route exact path='/myAcount' element ={ <MyAcount/>} />
            <Route exact path='/myCourses' element ={ <MyCourses/>} />
            <Route exact path='/rea' element ={ <Rea/>} />
            <Route exact path='/register' element ={ <Register/>} />
            <Route exact path="/" element = { <Home/>}/>
            <Route path="*" element = {<NotFound/> } />
        </Routes>
        </Layaout>
        </BrowserRouter>
    );
}

export default App;
