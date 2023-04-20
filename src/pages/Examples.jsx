import React from "react";
import '../styles.css';
import 'react-widgets/styles.css';
import Combobox from 'react-widgets/Combobox';
import { useState } from "react";

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
                            onChange={query => setQuery(query)}
                            data={['Example Query 1', 'Example Query 2', 'Example Query 3', 
                                    'Example Query 4', 'Example Query 5']}
                    />
                    <button className="button" style={{marginTop:'5%'}}>
                            Generate
                            {
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