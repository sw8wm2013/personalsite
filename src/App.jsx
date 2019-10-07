import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './Components/NavBar.jsx';
import './main.scss';

function App () {
    return(
        <div className='app'>
            <NavBar/>
            <h1>I AM IN THE REACT APP</h1>
            <img src="https://snwimages.s3.us-east-2.amazonaws.com/image1.JPG" width="100" height="100"/>
        </div>
    )
}
export default App;