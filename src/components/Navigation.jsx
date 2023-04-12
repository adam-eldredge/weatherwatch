import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    NavTitle
  } from './navbarstyle';
import AuthButton from './AuthButton';
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {
  const { isAuthenticated } = useAuth0();
    return isAuthenticated?(
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
              <NavLink to='/Examples' activeStyle>
                <h3>Examples</h3>
              </NavLink>
              <NavLink to='/Create' activeStyle>
                <h3>Create</h3>
              </NavLink>
              <NavLink to='/DataSet' activeStyle>
                <h3>Data Set</h3>
              </NavLink>
              <AuthButton/>
            </NavMenu>
          </Nav>
        </>
    ) : (
      <>
          <Nav>
            <NavTitle><h1>WeatherWatch</h1></NavTitle>
            <NavMenu>
              <NavLink to='/' activeStyle>
                <h3>Home</h3>
              </NavLink>
              <AuthButton/>
            </NavMenu>
          </Nav>
        </>
    )
}

export default Navigation;