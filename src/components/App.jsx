import React from 'react';
import Layaout from '../containers/Layout';
//import Login from '../containers/Login';
import Login from '../pages/Login';
import '../styles/global.scss'



const App = () => {
    return (
        <Layaout>
            <Login />
        </Layaout>
    );
}

export default App;
