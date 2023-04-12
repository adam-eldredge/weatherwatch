import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavBtnContain,
  } from './navbarstyle';

const Navigation = () => {
    return (
        <>
          <Nav>
            <NavMenu>
            <NavLink to='/Login' activeStyle>
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
            </NavMenu>
            <NavBtnContain>
              <NavBtn>
                <NavBtnLink to='/'> &nbsp;Login</NavBtnLink>
              </NavBtn>
              <NavBtn>
                <NavBtnLink to='/SignUp'>Sign Up</NavBtnLink>
              </NavBtn>
            </NavBtnContain>
          </Nav>
        </>
    )
}

export default Navigation;