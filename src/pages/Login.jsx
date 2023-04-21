import React, { useState } from "react";
import axios from "axios";
import '../styles.css';
import { NavLink } from "react-router-dom";
// ^This will be used to link to the sign up page

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [Loading, setLoading] = useState("");
    const [ErrMess, setErrMess] = useState("");

    const getLogin = () => {
        setLoading("LOADING...");
        setErrMess("");
        try {
          axios.post('/auth', {
            username: username,
            password: password
          })
          .then((res) => {
            if (res.data === '/') {
                window.location = '/'
            }
            else {
                setLoading("");
                setErrMess(res.data);
            }
          })
        }
        catch (error) {
          setLoading("");
          setErrMess("Something Went Wrong!")
        }
      }
    return (
        <div className = 'page-container'>
            <div className="page-text">
                <h1>Please Log In Below</h1>
                <br/>
                <div className = 'accountblock'>
                    <br/>
                    <br/>
                        <input placeholder="Username"
                            name='username'
                            id="username"
                            value = {username}
                            onChange={username => setUsername(username.target.value)}
                        />
                        <input type="password" placeholder="Password"
                            name='password'
                            id="password"
                            value = {password}
                            onChange={password => setPassword(password.target.value)}
                        />
                        <button type="submit" id="submitBtn" className="submitBtn" onClick={getLogin}>Submit</button>
                        <br />
                        <h3> { Loading } </h3>
                        <h3 style={{color:'red'}}> { ErrMess } </h3>
                    <br/>
                    <NavLink to='/Signup' style={{color:"black"}}>New User? <br/>Sign Up Here</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Login;