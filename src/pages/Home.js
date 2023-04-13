import React from "react";
import '../styles.css';
// ^This will be used to link to the sign up page

function Home() {
    return (
        <div className="page-container">
            <div className="page-text" style={{fontSize:'x-large'}}>
                <h2>Welcome to WeatherWatch!</h2>
                <div />
                <div className="block" style={{backgroundColor:'rgba(50,50,50,0.4)'}}>
                    <h3>Purpose:</h3>Allow users to generate complex trend queries regarding weather data
                </div>
                
                <br />
                <div className="block" style={{backgroundColor:'rgba(50,50,50,0.4)'}}>
                    <h3>How To Use:</h3>Log In - Check Out The Examples - Head To The Create Page - Create Your Own Query!
                </div>

                <br />
                <div className="block" style={{backgroundColor:'rgba(50,50,50,0.4)'}}>
                    <h3>Features:</h3>Examples - Create Your Own Query - Favorites
                </div>
            </div>
        </div>
    )
}

export default Home;