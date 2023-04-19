import React from "react";
import '../styles.css';
import 'react-widgets/styles.css';
import Combobox from 'react-widgets/Combobox';
import { useState } from "react";

function Favorites() {

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
            <h1>Favorites</h1>
                <div className = 'block' style={{justifyContent:'center'}}>
                    Select a Favorited Query:
                    <Combobox
                        style={{width: '50%', marginTop:'2%',  marginLeft: 'auto', marginRight: 'auto'}}
                            defaultValue="Select Query"
                            renderListItem={renderItem}
                            query = { query }
                            onChange={query => setQuery(query)}
                            data={['Favorite Query 1', 'Favorite Query 2', 'Favorite Query 3', 
                                    'Favorite Query 4', 'Favorite Query 5']}
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

export default Favorites;