import React from "react";
import '../styles.css';
// ^This will be used to link to the sign up page

function SignUp() {
    return (
        <div className='page'>
            <h2>Welcome to Weather Watch</h2>
            <h2>Sign Up</h2>

            <div className = 'loginblock'>
                <form>
                    <label>
                        First Name &nbsp;:{" "}
                        <input tpye='text' name='password' />
                    </label>
                    <br />
                    <label>
                        Last Name &nbsp;:{" "}
                        <input tpye='text' name='password' />
                    </label>
                    <br />
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

export default SignUp;