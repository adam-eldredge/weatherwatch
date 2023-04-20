import React, { useState} from "react";
import '../styles.css';
import 'react-widgets/styles.css';
import Combobox from 'react-widgets/Combobox';
import Multiselect from 'react-widgets/Multiselect';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function Create() {
    const [location, setLocation] = useState(null);
    const [attribute, setAttribute] = useState(null);
    const [operation, setOperation] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [season, setSeason] = useState([]);
    const [years, setYears] = useState([]);

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
                <h1>Create A Trend Query</h1>
                <div className = 'block' style={{width: '90%'}}>
                    <h4 style={{margin:0}}>Location - Attribute - Operation</h4>
                    <div style={{display:'flex'}}>
                    <Combobox
                    style={{width: '30%', marginRight:'5%', marginTop:'2%'}}
                        defaultValue="Select Location"
                        renderListItem={renderItem}
                        location = { location }
                        onChange={location => setLocation(location)}
                        data={['location1', 'location2', 'location3', 'location4', 'location5']}
                    />
                    <Combobox
                    style={{width: '30%', marginTop:'2%'}}
                        defaultValue="Select Attribute"
                        renderListItem={renderItem}
                        attribute = { attribute }
                        onChange={attribute => setAttribute(attribute)}
                        data={['Temperature - Avg', 'Temperature - Min', 'Temperature - Max', 'Wind Speed', 'Wind Direction', 'Air Pressure']}
                    />
                    <Combobox
                    style={{width: '30%', marginTop:'2%', marginLeft:'5%'}}
                        defaultValue="Select Operation"
                        renderListItem={renderItem}
                        operation = { operation }
                        onChange={operation => setOperation(operation)}
                        data={['Sum', 'Range', 'Median', 'Count', 'Mean']}
                    />
                    </div>
                    <br/>
                    <div className = 'block' style={{
                                                    display:'flex', 
                                                    width: '100%',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    alignText: 'center',
                                                    background:'none',
                                                    marginTop: '3%'
                                                    }}>
                        <div style={{width:'35%'}}>
                            <h4 style={{margin:0, marginBottom:20}}>Date Picker</h4>
                            <div style={{display:'flex'}}>
                                <div> 
                                    Start Date:
                                    <DatePicker
                                        placeholderText="Select Start Date"
                                        selected={ startDate }
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={new Date("01-01-2018")}
                                        maxDate={new Date("09-30-2022")}
                                        onChange={ date => setStartDate(date)}
                                    />
                                </div>
                                <div>
                                    End Date:
                                    <DatePicker
                                        placeholderText="Select End Date"
                                        selected={ endDate }
                                        selectsEnd
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={startDate}
                                        maxDate={new Date("09-30-2022")}
                                        onChange={ date => setEndDate(date)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div><h4 style={{margin:0}}>OR</h4></div>
                        <div style={{width:'35%'}}>
                            <h4 style={{margin:0, marginBottom:20}}>Seasons by Year</h4>
                                <div style={{display:'flex', justifyContent: 'center'}}>
                                    <div> 
                                        Season:
                                        <Multiselect
                                        style={{fontSize:'small', width:'100%'}}
                                            defaultValue={[]}
                                            season = { season }
                                            onChange={season => setSeason(season)}
                                            data={['Fall', 'Winter', 'Spring', 'Summer']}
                                        />
                                    </div>
                                    <div style={{marginLeft:'20%'}}>
                                        Year:
                                        <Multiselect style={{fontSize:'large', width:'100%'}}
                                            defaultValue={[]}
                                            years = { years }
                                            onChange={years => setYears(years)}
                                            data={['2018', '2019', '2020', '2021', '2022']}
                                        />
                                    </div>
                                </div>
                        </div>
                    </div>
                    <button className="button" style={{marginTop:'3%'}}>
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

export default Create;