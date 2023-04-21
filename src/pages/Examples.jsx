import React from "react";
import '../styles.css';
import axios from "axios";
import 'react-widgets/styles.css';
import Combobox from 'react-widgets/Combobox';
import { useState, useEffect } from "react";

function Examples() {

    const[query,setQuery] = useState(null);

    const renderItem = ({ item }) => (
        <>
            <span
                style = {{
                    height: 18,
                    display: "inline-block",
                    verticalAlign: "text-bottom",
                    backgroundColor: item.toLowerCase(),
                }}
            />
            { item }
        </>
    );

    const [message, setMessage] = useState("");
    const getInfo = (url) => {
        try{
            axios.get(url)
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
    //useEffect(() => {getInfo()}, []);


    return (
        <div className = 'page-container'>
            <div className="page-text">
            <h1>Examples</h1>
                <div className = 'block' style={{justifyContent:'center'}}>
                    Select an Example Query:
                    <Combobox
                        style={{width: '50%', marginTop:'2%',  marginLeft: 'auto', marginRight: 'auto'}}
                            defaultValue="Select Query"
                            renderListItem={renderItem}
                            query = { query }
                            onChange={query => {
                                setQuery(query);
                                setMessage('');     //this resets the message every change
                            }}
                            data={['Example Query 1', 'Example Query 2', 'Example Query 3', 
                                    'Example Query 4', 'Example Query 5']}
                    />
                    <button className="button" style={{marginTop:'5%'}} onClick={()=>{
                        if (query === 'Example Query 1')
                            getInfo('/examples1');
                        else if (query === 'Example Query 2')
                            getInfo('/examples2');
                        else if (query === 'Example Query 3')
                            getInfo('/examples3');
                        else if (query === 'Example Query 4')
                            getInfo('/examples4');
                        else if (query === 'Example Query 5')
                            getInfo('/examples5');
                    }}>
                            Generate
                            {
                                <div>{message}</div>
                                // This is where you would say onSubmit, take all values
                                // If missing necessary values, reject and output error
                                // Else, generate sql query and send to our weather database
                                // With the tuples that get passed back, figure out how to output data.
                            }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Examples;