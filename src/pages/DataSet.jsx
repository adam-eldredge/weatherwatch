import React from "react";
import '../styles.css';
// ^This will be used to link to the sign up page

function DataSet() {
    return (
        <div className='page'>
            <h2>Link To Dataset Used:</h2>
            <h4>Caution: Will redirect to new page!</h4>

            <div>
                <a href = "https://www.kaggle.com/datasets/balabaskar/historical-weather-data-of-all-country-capitals"target="_blank">
                    Click Here to View Dataset
                </a>
            </div>

        </div>
    )
}

export default DataSet;