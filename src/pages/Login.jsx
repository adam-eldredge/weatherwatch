import React from "react";
import '../styles.css';
// ^This will be used to link to the sign up page

function Login() {
    return (
        <div className = 'page'>
            <h2>Welcome to Weather Watch</h2>
            <h3>Please Log In</h3>

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
                </form>
            </div>

        </div>
    )
}

export default Login;