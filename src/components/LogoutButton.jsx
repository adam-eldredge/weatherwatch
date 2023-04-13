import React from "react";
import {
    NavLink
}
from "./navbarstyle";

const LogoutButton = () => {

  return (
    <NavLink style={{color: '#8B0000', borderTopStyle:'none'}}>
      <h3>Log Out</h3>
    </NavLink>
  );
};

export default LogoutButton;