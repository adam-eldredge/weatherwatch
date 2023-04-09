import React from "react";
import '../styles.css';
// ^This will be used to link to the sign up page

function Login() {
    return (
        <div className = 'page'>
            <h2>Welcome to Weather Watch</h2>
            <h2>Please Log In</h2>
            <br />

            <div className = 'loginblock'>
                <form>
                    <label>
                        Username  :{" "}
                        <input type='text' name='username' />
                    </label>
                    <br />
                    <label>
                        Password &nbsp;:{" "}
                        <input tpye='text' name='password' />
                    </label>
                    <br />
                    <input type='submit' value='submit' />
                    <h5 style = {{ fontSize: 15 }}>Don't have an account?</h5>
                    <a href= '/SignUp'>
                        <h5 style = {{fontSize: 15}}>Sign Up!</h5>
                    </a>
                </form>
            </div>

        </div>
    )
}

export default Login;