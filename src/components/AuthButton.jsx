import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import auth from "./authenticated";

const AuthButton = () => {
    return auth? <LogoutButton/> : <LoginButton/>;
};

export default AuthButton;