import React from 'react';
import "./App.css";
import './styles.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
  Login,
  SignUp,
  Name,
  Dataset,
  Favorites,
  Examples,
  Create
} from "./pages";
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element = {<Login />} />
        <Route path='/Login' element = {<Login />} />
        <Route path='/SignUp' element = {<SignUp />} />
        <Route path='/Name' element = {<Name />} />
        <Route path='/DataSet' element = {<Dataset />} />
        <Route path='/Favorites' element = {<Favorites />} />
        <Route path='/Examples' element = {<Examples />} />
        <Route path='/Create' element = {<Create />} />

      </Routes>
  </Router>
  );
}

export default App;