import React from "react";
import '../styles.css';
// ^This will be used to link to the sign up page

function Home() {
    return (
        <div className="page-container">
            <div className="page-text" style={{fontSize:'x-large'}}>
                <h2>Welcome to WeatherWatch!</h2>
                <div />
                <h3>Purpose:</h3>Allow users to generate complex trend queries regarding weather data

                <br />
                <h3>How To Use:</h3>Log In - Check Out The Examples - Head To The Create Page - Create Your Own Query!

                <br />
                <h3>Features:</h3>Examples - Create Your Own Query - Favorites
            </div>
        </div>
    )
}

export default Home;