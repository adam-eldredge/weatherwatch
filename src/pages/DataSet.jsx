import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import '../styles.css';
// ^This will be used to link to the sign up page

function DataSet() {
    const [message, setMessage] = useState("");
    const getInfo = () => {
    try{
      axios.get('/student')
      .then((res)=>{
        console.log(res.status)
        console.log(res.data)
        setMessage(res.data)
      }) 
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {getInfo()}, []);
    
  return (
        <div className='page-container' style={{textAlign: 'center', color: 'white'}}>
            <div className="page-text">
                <h1>Link To Dataset Used:</h1>
                <h2>Caution: Will redirect to new page!</h2>

                <div>
                    <a href = "https://www.kaggle.com/datasets/balabaskar/historical-weather-data-of-all-country-capitals"target="_blank"
                        style={{color: 'white'}} rel="noreferrer">
                        Click Here to View Dataset
                    </a>
                </div>
                <div>
                    Number of tuples in the database: {message}
                </div>
            </div>
        </div>
    )
}

export default DataSet;