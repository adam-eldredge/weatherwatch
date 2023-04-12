import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
    NavLink
}
from "./navbarstyle";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <NavLink onClick={() => loginWithRedirect()} style={{color: '#00BB00', borderTopStyle:'none'}}><h3>Log In</h3></NavLink>;
};

export default LoginButton;