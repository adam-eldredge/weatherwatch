import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
    NavLink
}
from "./navbarstyle";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <NavLink onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} style={{color: '#8B0000', borderTopStyle:'none'}}>
      <h3>Log Out</h3>
    </NavLink>
  );
};

export default LogoutButton;