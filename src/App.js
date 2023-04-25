import React, { useState } from 'react';
import "./App.css";
import './styles.css';
import "./fonts/Comfortaa-Bold.ttf";
import "./fonts/Comfortaa-Light.ttf";
import "./fonts/Comfortaa-Medium.ttf";
import "./fonts/Comfortaa-Regular.ttf";
import "./fonts/Comfortaa-SemiBold.ttf";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
  Home,
  Dataset,
  Favorites,
  Examples,
  Create,
  Login,
  Signup
} from "./pages";
import axios from "axios";
import Navigation from './components/Navigation';

function App() {
  const [LoggedIn, setLoggedIn] = useState("no");
  try {
    axios.get('/checkauth')
    .then(res => {
      setLoggedIn(res.data);
    })
  }
  catch (error){
    console.log(error);
  }
  return (
      <Router>
        <Navigation val={LoggedIn}/>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/Login' element = {<Login />} />
          <Route path='/DataSet' element = {<Dataset />} />
          <Route path='/Favorites' element = {<Favorites />} />
          <Route path='/Queries' element = {<Examples />} />
          <Route path='/Signup' element = {<Signup />} />
          <Route path="*" element={
            <div className='page-container'>
              <br/>
              <h1> ERROR 404: PAGE NOT FOUND </ h1>
            </div>
          } />
        </Routes>
      </Router>
  );
}

export default App;