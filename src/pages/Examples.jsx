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
    var XArray;
    var YArray;
    var graphlabel1;
    var graphlabel2;
    const [message, setMessage] = useState("");
    const [graphData, setgraphData] = useState({});
    const [graphOptions, setgraphOptions] = useState({});
    
    const getInfo = (url, xLabel, yLabel, graphName) => {
        try{
            axios.get(url)
            .then((res)=>{
                console.log(res.status)
                console.log(res.data)
                console.log(res.data.map((d)=>d[0]))
                console.log(res.data.map((d)=>d[1]))                
                //setMessage(res.data);
                XArray = res.data.map((d)=>d[0]);
                YArray = res.data.map((d)=>d[1]);
                console.log(XArray)
                console.log(YArray)
                setgraphData({
                    labels: XArray,
                    datasets: [
                        {
                            label: graphlabel1,
                            data: YArray,
                            backgroundColor: 'rgba(36, 29, 201, 1)',
                            borderColor: 'rgba(75, 192, 255, 1)',
                            borderWidth: 1
                        }
                    ]
                });
                setgraphOptions({
                    scales: {
                        x: {
                          title: {
                            display: true,
                            text: xLabel,
                            color: 'white'
                          },
                          ticks: {
                            color: 'white'
                          }
                        },
                        y: {
                          title: {
                            display: true,
                            text: yLabel,
                            color: 'white'
                          },
                          ticks: {
                            color: 'white'
                          }
                        }
                    },
                    plugins: {
                        legend: {
                          labels: {
                            color: 'white' //change legend label color to green
                          }
                        }
                    }
                });
            }) 
        } 
        catch (error) {
            console.log(error)
        }
    }
    console.log(XArray)
    console.log(YArray)
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
                        {
                            graphlabel1 = ("Average daily temperature range in Tunis for each month of the year");
                            getInfo('/examples1', 'Month', 'Average Daily Temperature Range (°C)', message);
                        }
                        else if (query === 'Example Query 2')
                        {
                            graphlabel1 = ("Average monthly windspeed in Tunis between 2018-09-19 and 2019-01-19");
                            getInfo('/examples2', 'Month', 'Average Wind Speed (kmph)', message);
                        }    
                        else if (query === 'Example Query 3')
                        {   //planning to have two graphs on the same chart. might need a new function instead of getInfo to make things simpler
                            graphlabel1 = "Max temperature recorded for each month of the year in Tunis";
                            graphlabel2 = "Max temperature recorded for each month of the year in Cairo";
                            getInfo('/examples3');
                        }
                        else if (query === 'Example Query 4')
                            getInfo('/examples4');
                        else if (query === 'Example Query 5')
                            getInfo('/examples5');
                    }}>
                            Generate
                            {
                                
                                // This is where you would say onSubmit, take all values
                                // If missing necessary values, reject and output error
                                // Else, generate sql query and send to our weather database
                                // With the tuples that get passed back, figure out how to output data.
                            }
                    </button>
                    <div>
                         
                        {graphData.labels? <LineChart chartData={graphData} chartOptions={graphOptions}/> : <div/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Examples;