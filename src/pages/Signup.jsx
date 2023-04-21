import React, { useState} from "react";
import axios from "axios";
import '../styles.css';
// ^This will be used to link to the sign up page

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [Loading, setLoading] = useState("");
    const [ErrMess, setErrMess] = useState("");

    const createAccount = () => {
        setLoading("LOADING...");
        setErrMess("");
        try {
            axios.post('/newuser' , 
            { username: username, password: password, password2: password2})
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
                <h1>Sign Up Below</h1>
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
                        <input type="password" placeholder="Confirm Password"
                            name='password2'
                            id="password2"
                            value = {password2}
                            onChange={password2 => setPassword2(password2.target.value)}
                        />
                        <button type="submit" id="submitBtn" className="submitBtn" onClick={createAccount}>Submit</button>
                        <br />
                        <h3> { Loading } </h3>
                        <h3 style={{color:'red'}}> { ErrMess } </h3>
                </div>
            </div>
        </div>
    )
}

export default Signup;