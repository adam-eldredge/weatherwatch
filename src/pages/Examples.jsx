import React from "react";
import '../styles.css';
import LineChart from "../components/LineChart"; 
import axios from "axios";
import 'react-widgets/styles.css';
import Combobox from 'react-widgets/Combobox';
import { useState, useEffect } from "react";
import { Chart } from "chart.js";

function Examples() {
    // Set font for graphs

    const[cityNameArr, setCityNameArr] = useState([]);
    const[cityName, setCityName] = useState('');
    const[city2Name, setCity2Name] = useState('');
    const[query,setQuery] = useState(null);
    const[qNum, setQNum] = useState(0);

    if (cityNameArr.length === 0) {
        try {
            axios.get('/cities')
            .then((res) => {
                res.data.forEach(
                    setCityNameArr(cityNameArr.concat(res.data))
                )
            })
        }
        catch (error) {
            console.log(error)
        }
    }

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

    const renderCity = ({ item }) => (
        <>
            <span
                style = {{
                    height: 18,
                    display: "inline-block",
                    verticalAlign: "text-bottom",
                    backgroundColor: item.toString().toLowerCase(),
                }}
            />
            { item }
        </>
    );
    var XArray;
    var YArray;
    var ZArray;
    var graphlabel1;
    var graphlabel2;
    const [message, setMessage] = useState("");
    const [err, setErr] = useState("");
    const [graphData, setgraphData] = useState({});
    const [graphOptions, setgraphOptions] = useState({});
    
    const getInfo = (url, xLabel, yLabel, twoLines) => {
        try{
            if (twoLines) {
                axios.post(url, {
                    cityName: {cityName},
                    city2Name: {city2Name}
                })           
                .then((res)=>{
                    console.log(res.status)
                    console.log(res.data)
                    console.log(res.data.map((d)=>d[0]))
                    console.log(res.data.map((d)=>d[1]))                
                    //setMessage(res.data);
                    XArray = res.data.map((d)=>d[0]);
                    YArray = res.data.map((d)=>d[1]);
                    ZArray = twoLines ? res.data.map((d)=>d[2]) : undefined;
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
                            },
                            ZArray ? {
                                label: graphlabel2,
                                data: ZArray,
                                backgroundColor: 'rgba(36, 114, 20, 1)',
                                borderColor: 'rgba(75, 255, 101, 1)',
                                borderWidth: 1
                            } : null
                        ].filter(dataset => dataset != null)
                    });
                    setgraphOptions({
                        scales: {
                            x: {
                              title: {
                                display: true,
                                text: xLabel,
                                color: 'white',
                                font: {
                                    family: "Medium",
                                    size: 15
                                }
                              },
                              ticks: {
                                color: 'white',
                                font: {
                                    family: "Medium",
                                    size: 15
                                }
                              }
                            },
                            y: {
                              title: {
                                display: true,
                                text: yLabel,
                                color: 'white',
                                font: {
                                    family: "Medium",
                                    size: 15
                                }
                              },
                              ticks: {
                                color: 'white',
                                font: {
                                    family: "Medium",
                                    size: 15
                                }
                              }
                            }
                        },
                        plugins: {
                            legend: {
                              labels: {
                                color: 'white', //change legend label color to green
                                font: {
                                    family: "Medium",
                                    size: 20
                                }
                              }
                            },
                            tooltip: {
                                
                            }
                        }

                    });
                }) 
            }
            else {
                axios.post(url, {
                    cityName: {cityName}
                })           
                .then((res)=>{
                    console.log(res.status)
                    console.log(res.data)
                    console.log(res.data.map((d)=>d[0]))
                    console.log(res.data.map((d)=>d[1]))                
                    //setMessage(res.data);
                    XArray = res.data.map((d)=>d[0]);
                    YArray = res.data.map((d)=>d[1]);
                    ZArray = twoLines ? res.data.map((d)=>d[2]) : undefined;
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
                            },
                            ZArray ? {
                                label: graphlabel2,
                                data: ZArray,
                                backgroundColor: 'rgba(36, 114, 20, 1)',
                                borderColor: 'rgba(75, 255, 101, 1)',
                                borderWidth: 1
                            } : null
                        ].filter(dataset => dataset != null)
                    });
                    setgraphOptions({
                        scales: {
                            x: {
                              title: {
                                display: true,
                                text: xLabel,
                                color: 'white',
                                font: {
                                    family: "Medium",
                                    size: 15
                                }
                              },
                              ticks: {
                                color: 'white',
                                font: {
                                    family: "Medium",
                                    size: 15
                                }
                              }
                            },
                            y: {
                              title: {
                                display: true,
                                text: yLabel,
                                color: 'white',
                                font: {
                                    family: "Medium",
                                    size: 15
                                }
                              },
                              ticks: {
                                color: 'white',
                                font: {
                                    family: "Medium",
                                    size: 15
                                }
                              }

                            }
                        },
                        plugins: {
                            legend: {
                              labels: {
                                color: 'white', //change legend label color to green
                                font: {
                                    family: "Medium",
                                    size: 20
                                }
                              }
                            },
                            tooltip: {
                                
                            }
                        }
                    });
                }) 
            }
            
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
            <h1>Queries</h1>
                <div className = 'block' style={{width:'70%',justifyContent:'center'}}>
                    <div className="block" style={{background:'none', display:'flex'}}>
                    <div style={{marginRight:'8%'}}>
                    Select a Query:
                    <Combobox
                        style={{width: '100%', marginTop:'2%',  marginLeft: 'auto', marginRight: 'auto'}}
                            placeholder="Select Query"
                            defaultValue=""
                            renderListItem={renderItem}
                            query = { query }
                            onChange={query => {
                                setQuery(query);
                                setMessage('');     //this resets the message every change
                                if (query === 'Example Query 1') {
                                    setQNum(1)
                                }
                                else if (query === 'Example Query 2') {
                                    setQNum(2)
                                }
                                else if (query === 'Example Query 3') {
                                    setQNum(3)
                                }
                                else if (query === 'Example Query 4') {
                                    setQNum(4)
                                }
                                else if (query === 'Example Query 5') {
                                    setQNum(5)
                                }
                            }}
                            data={['Example Query 1', 'Example Query 2', 'Example Query 3', 
                                    'Example Query 4', 'Example Query 5']}
                    />
                    </div>
                    <div style={{marginLeft:'8%'}}>
                    Select a City:
                    <Combobox
                        style={{width: '100%', marginTop:'2%',  marginLeft: 'auto', marginRight: 'auto'}}
                            defaultValue=""
                            placeholder="Select City"
                            renderListItem={renderCity}
                            cityName = { cityName }
                            onChange={cityName => {
                                setCityName(cityName[0]);
                            }}
                            data={cityNameArr}
                    />  {(query === 'Example Query 3' || query === 'Example Query 4' || query === 'Example Query 5') && (
                            <Combobox
                            style={{ width: '100%', marginTop: '2%', marginLeft: 'auto', marginRight: 'auto' }}
                            defaultValue=""
                            placeholder="Select another city"
                            renderListItem={renderCity}
                            city2Name={city2Name}
                            onChange={city2Name => {
                            setCity2Name(city2Name[0]);
                            }}
                            data={cityNameArr}
                        />
                      )}
                    </div>                    
                    </div>

                    {
                        // THIS IS FOR THE TWO BUTTONS
                    }
                    <button className="button" style={{marginTop:'0%'}} onClick={()=>{
                        if (query && cityName) {
                             setErr("");
                             if (query === 'Example Query 1')
                            {
                                graphlabel1 = ("Average daily temperature range in " + cityName + " for each month of the year");
                                getInfo('/examples1', 'Month', 'Average Daily Temperature Range (°C)', false);
                            }
                            else if (query === 'Example Query 2')
                            {
                                graphlabel1 = ("Average monthly windspeed in " + cityName + " between 2018-01-19 and 2019-01-19");
                                getInfo('/examples2', 'Month', 'Average Wind Speed (kmph)', false);
                            }    
                            else if (query === 'Example Query 3')
                            {   //planning to have two graphs on the same chart. might need a new function instead of getInfo to make things simpler
                                // Update second city name to cityName2
                                graphlabel1 = "Max temperature recorded for each month of the year in " + cityName;
                                graphlabel2 = "Max temperature recorded for each month of the year in " + city2Name;
                                getInfo('/examples3', 'Month', 'Maximum Recorded Temperature (°C)', true);
                            }
                            else if (query === 'Example Query 4')
                            {
                                graphlabel1 = "Average monthly wind speed for each month of 2021 in " + cityName;
                                graphlabel2 = "Average monthly wind speed for each month of 2021 in " + city2Name;
                                getInfo('/examples4', 'Month', 'Average Monthly Wind Speed (kmph)', true);
                            }    
                            else if (query === 'Example Query 5')
                            {
                                graphlabel1 = "Average wind speed for each season between from 2019 to 2021 in " + cityName;
                                graphlabel2 = "Average wind speed for each season between from 2019 to 2021 in " + city2Name;
                                getInfo('/examples5', 'Month', 'Average Monthly Air Pressure (hPa)', true);
                            }    
                         else {
                             setErr("Invalid: Please Select a Query and City");
                         }
                        }}>
                             Generate
                             {

                                 // This is where you would say onSubmit, take all values
                                 // If missing necessary values, reject and output error
                                 // Else, generate sql query and send to our weather database
                                 // With the tuples that get passed back, figure out how to output data.
                             }
                    </button>
                    <button className="button" style={{marginTop:'0%'}} onClick={()=>{
                        if (query && cityName) {
                             // Try to add to user's favorites
                             try {
                                axios.post('/addFav', {
                                    cityName: {cityName},
                                    queryNum: qNum
                                })
                                .then((res) => {
                                    console.log(res.data);
                                })
                             }
                             catch (error) {
                                console.log(error)
                            }
                        }
                        else {
                            setErr("Invalid: Please Select a Query and City");
                        }
                    }}>

                        Favorite
                             
                    </button>
                    
                    <div>
                        <h5>{message}</h5>
                        <h5 style={{color:'red'}}>{err}</h5>
                        {graphData.labels? <LineChart chartData={graphData} chartOptions={graphOptions}/> : <div/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Examples;