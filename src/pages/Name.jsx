import React from "react";
import '../styles.css';

function Name() {
    return (
        <div className = 'page'>
            <h2>Welcome to Weather Watch</h2>
            <h3>Please Enter Your Name</h3>
            <div className = 'loginblock'>
                <form>
                    <label>
                        First Name :{" "}
                        <input type='text' name='username' />
                    </label>
                    <br />
                    <label>
                        Last Name &nbsp;:{" "}
                        <input type='text' name='password' />
                    </label>
                    <br />
                    <input type='submit' value='submit' />
                </form>
            </div>

        </div>
    )
}

export default Name;