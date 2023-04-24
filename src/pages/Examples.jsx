import React from "react";
import '../styles.css';
import LineChart from "../components/LineChart"; 
import axios from "axios";
import 'react-widgets/styles.css';
import Combobox from 'react-widgets/Combobox';
import { useState, useEffect } from "react";

function Examples() {

    const[cityNameArr, setCityNameArr] = useState([]);
    const[cityName, setCityName] = useState('');
    const[query,setQuery] = useState(null);

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
    const [message, setMessage] = useState("");
    const [err, setErr] = useState("");
    const [graphData, setgraphData] = useState({});
    
    const getInfo = (url) => {
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
    console.log(XArray)
    console.log(YArray)
    console.log(graphData);
    //useEffect(() => {getInfo()}, []);

    return (
        <div className = 'page-container'>
            <div className="page-text">
            <h1>Queries</h1>
                <div className = 'block' style={{justifyContent:'center'}}>
                    <div className="block" style={{background:'none', display:'flex'}}>
                    <div style={{marginRight:'10%'}}>
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
                            }}
                            data={['Example Query 1', 'Example Query 2', 'Example Query 3', 
                                    'Example Query 4', 'Example Query 5']}
                    />
                    </div>
                    <div>
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
                    />
                    </div>
                    </div>
                    <button className="button" style={{marginTop:'5%'}} onClick={()=>{
                        if (query && cityName) {
                            setErr("")
                            if (query === 'Example Query 1')
                            {
                                setMessage("Average temperature range in " + cityName + " for each month of the year");
                                getInfo('/examples1');
                            }
                            else if (query === 'Example Query 2')
                            {
                                setMessage("Average monthly windspeed in " + cityName + " between 2018-09-19 and 2019-01-19")
                                getInfo('/examples2');
                            }    
                            else if (query === 'Example Query 3')
                                getInfo('/examples3');
                            else if (query === 'Example Query 4')
                                getInfo('/examples4');
                            else if (query === 'Example Query 5')
                                getInfo('/examples5');
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
                    <div>
                        <h5>{message}</h5>
                        <h5 style={{color:'red'}}>{err}</h5>
                        {graphData.labels? <LineChart chartData={graphData}/> : <div/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Examples;