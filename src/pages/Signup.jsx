import React from "react";
import '../styles.css';
// ^This will be used to link to the sign up page

function Signup() {
    return (
        <div className = 'page-container'>
            <div className="page-text">
                <h1>Sign Up Below</h1>
                <br/>
                <div className = 'accountblock'>
                    <br/>
                    <br/>
                        <input placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <input type="password" placeholder="Confirm Password"/>
                        <button type="submit" id="submitBtn" className="submitBtn">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;