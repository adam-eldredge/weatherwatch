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
              <NavLink to='/' activeStyle>
                <h3>Welcome</h3>
              </NavLink>
              <NavLink to='/Name' activeStyle>
                <h3>Name</h3>
              </NavLink>
              <NavLink to='/DataSet' activeStyle>
                <h3>DataSet</h3>
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