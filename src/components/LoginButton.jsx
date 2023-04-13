import React from "react";
import {
    NavLink
}
from "./navbarstyle";

const LoginButton = () => {
  return <NavLink to='/Login' style={{color: '#00BB00', borderTopStyle:'none'}}><h3>Log In</h3></NavLink>;
};

export default LoginButton;