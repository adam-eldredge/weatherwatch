import React from "react";
import {
    NavLink
}
from "./navbarstyle";

const LogoutButton = () => {

  function subForm() {
    var form = document.getElementById("form");
    form.submit();
  }

  return (
    <form id="form" action="/signout" method="post">
    <NavLink type="submit" id="submitbtn" style={{color: '#8B0000', borderTopStyle:'none'}}
    onClick={ subForm }
    >
      <h3>Log Out</h3>
    </NavLink>
    </form>
  );
};

export default LogoutButton;