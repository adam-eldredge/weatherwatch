import React from "react";
import '../styles.css';
import LineChart from "../components/LineChart"; 
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
    const [graphData, setgraphData] = useState({});
    
    const getInfo = (url) => {
        try{
            axios.get(url)
            .then((res)=>{
                console.log(res.status)
                console.log(res.data)
                console.log(res.data.map((d)=>d[0]))
                console.log(res.data.map((d)=>d[1]))                
                setMessage(res.data);
                var XArray = res.data.map((d)=>d[0]);
                var YArray = res.data.map((d)=>d[1]);
                console.log(XArray)
                console.log(YArray)
                setgraphData({
                    labels: XArray,
                    datasets: [
                        {
                            label: "bleh",
                            data: YArray,
                            backgroundColor: 'rgba(36, 29, 201, 0.75)',
                            borderColor: 'rgba(75, 192, 255, 1)',
                            borderWidth: 1
                        }
                    ]
                });
            }) 
        } 
        catch (error) {
            console.log(error)
        }
    }
    //console.log(XArray)
    //console.log(YArray)
    console.log(graphData);
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
                                <div>
                                    <LineChart chartData={graphData}/>
                                </div>
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