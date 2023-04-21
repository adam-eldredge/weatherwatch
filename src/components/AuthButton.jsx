import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const AuthButton = (props) => {
    return props.val? <LogoutButton/> : <LoginButton/>;
};

export default AuthButton;