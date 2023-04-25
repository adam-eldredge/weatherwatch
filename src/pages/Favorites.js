import React from "react";
import '../styles.css';
import 'react-widgets/styles.css';
import Combobox from 'react-widgets/Combobox';
import { useState } from "react";
import axios from "axios";
import LineChart from "../components/LineChart";

function Favorites() {

    const[queryNums, setQueryNums] = useState([]);
    const[cityNames, setCityNames] = useState([]);
    const[loaded, setLoaded] = useState(false);
    const[loaded2, setLoaded2] = useState(false);
    const[query, setQuery] = useState(null);

    const [dataArray, setDataArray] = useState([]);

    var XArray;
    var YArray;
    var graphlabel1;
    var graphlabel2;
    const [message, setMessage] = useState("");
    const [err, setErr] = useState("");
    const [graphData, setgraphData] = useState({});
    const [graphOptions, setgraphOptions] = useState({});

    const getInfo = (url, xLabel, yLabel, graphName, cityName) => {
        try{
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
        catch (error) {
            console.log(error)
        }
    }


    if (loaded === false) {
        try {
            axios.get('/getFav')
            .then((res) => {
                if (res.data === "User Has No Favorites")
                {
                    setMessage(res.data)
                }
                //console.log(res.data.queryNum.map((d)=>d[0]))
                //console.log(res.data.cityName.map((d)=>d[0]))
                setQueryNums(res.data.queryNum.map((d)=>d[0]));
                setCityNames(res.data.cityName.map((d)=>d[0]));
            })
        }
        catch (error) {
            console.log(error)
        }
        setLoaded(true)
    }

    if (cityNames.length > 0 && dataArray.length <= cityNames.length) {
        console.log('ran')
        if (loaded2 === false) {
            setLoaded2(true)
            console.log('pushed')
            for (let i = 0; i < cityNames.length; i++) {
                dataArray.push('Favorite ' + JSON.stringify(i+1))
                console.log({dataArray});
            }
        }
    }
    
    

    const renderItem = ({ item }) => (
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
                            query = {query}
                            onChange={query => {
                                setQuery(query);
                            }}
                            data={dataArray}
                    />
                    <button className="button" style={{marginTop:'5%'}}
                    onClick={() => {
                        if (query) {
                            if (query === 'Favorite 1')
                            {
                                const cityName = cityNames[0]
                                graphlabel1 = ("Average daily temperature range in " + cityName + " for each month of the year");
                                getInfo('/examples1', 'Month', 'Average Daily Temperature Range (°C)', message, cityName);
                            }
                            else if (query === 'Favorite 2')
                            {
                                const cityName = cityNames[1]
                                graphlabel1 = ("Average monthly windspeed in " + cityName + " between 2018-01-19 and 2019-01-19");
                                getInfo('/examples2', 'Month', 'Average Wind Speed (kmph)', message, cityName);
                            }
                            else {
                                setErr("Invalid: Please Select a Query");
                            }    
                    }}}
                    >
                            Generate
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

export default Favorites;