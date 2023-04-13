import React from 'react';
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
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/Login' element = {<Login />} />
        <Route path='/DataSet' element = {<Dataset />} />
        <Route path='/Favorites' element = {<Favorites />} />
        <Route path='/Examples' element = {<Examples />} />
        <Route path='/Create' element = {<Create />} />
        <Route path='/Signup' element = {<Signup />} />

      </Routes>
  </Router>
  );
}

export default App;