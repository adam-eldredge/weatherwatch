import React from "react";
import '../styles.css';
// ^This will be used to link to the sign up page

function Login() {
    return (
        <div className = 'page-container'>
            <div className="page-text">
                <h1>Please Log In Below</h1>
                <br/>
                <div className = 'accountblock'>
                    <br/>
                    <br/>
                        <input placeholder="Username"/>
                        <input placeholder="Password"/>
                        <button type="submit" id="submitBtn" className="submitBtn">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login;