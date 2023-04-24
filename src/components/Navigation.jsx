import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    NavTitle
  } from './navbarstyle';
import AuthButton from './AuthButton';

const Navigation = (props) => {
  return (props.val === 'yes')?
  (
  <>
        <Nav>
        <NavTitle><h1>WeatherWatch</h1></NavTitle>
        <NavMenu>
          <NavLink to='/' activeStyle>
              <h3>Home</h3>
            </NavLink>
          <NavLink to='/Favorites' activeStyle>
              <h3>Favorites</h3>
            </NavLink>
            <NavLink to='/Queries' activeStyle>
              <h3>Queries</h3>
            </NavLink>
            <NavLink to='/Create' activeStyle>
              <h3>Create</h3>
            </NavLink>
            <NavLink to='/DataSet' activeStyle>
              <h3>Data Set</h3>
            </NavLink>
            <AuthButton val={props.val === 'yes'}/>
          </NavMenu>
        </Nav>
  </>
  ) :
  (
  <>
        <Nav>
          <NavTitle><h1>WeatherWatch</h1></NavTitle>
          <NavMenu>
            <NavLink to='/' activeStyle>
              <h3>Home</h3>
            </NavLink>
            <AuthButton val={props.val === 'yes'}/>
          </NavMenu>
        </Nav>
  </>
  )
     
}

export default Navigation;