const PORT = 5005;
const oracledb = require('oracledb');
const cors = require('cors');
const express = require('express');
const session = require('express-session');
const chart = require('chart.js/auto');

const app = express();

const config = {
    user: 'siriwardhanea',
    password: 'uRWraeOA0XAnIBCco1KLrnkB',
    connectString: '//oracle.cise.ufl.edu/orcl',
};
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: false,
    cookie: {maxAge: 60 * 60 * 1000}
}));
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// SIGNOUT FUNCTION
app.post('/signout', async(req, res) => {
    res.redirect("/login");
    req.session.destroy();
    console.log('user is signed out');
    res.end();
})

// TUPLES FROM DATABASE
app.get('/weathertuples', async (req, res) =>{ 
    
        try{
            const connection = await oracledb.getConnection(config);
            const result = await connection.execute('SELECT COUNT(*) FROM adameldredge.weather');
            console.log('Logging results... :');
            console.log(result.rows)
            connection.close();
            res.json(result.rows);
        }
        catch (error){
            console.log(error);
            res.status(400).json({message:error})
        }
    }
)

// CREATE NEW ACCOUNT
app.post('/newuser/', async (req, res) => {
    try {
        console.log(req.body)
        const username = req.body.username;
        const password = req.body.password;
        const password2 = req.body.password2;
        console.log("username: " + username);
        console.log("password: " + password);
        console.log("password2: " + password);

        if (username && password && password2) {
            if (password === password2) {
                // MAIN CODE BODY - ALL FIELDS ENTERED AND PASSWORDS MATCH

                // Check to see if username is already in our database
                const connection = await oracledb.getConnection(config);
                const result = await connection.execute('SELECT * FROM adameldredge.USERS WHERE USERNAME = :username', [username])
                if (result.rows.length === 1) {
                    res.json("Looks like this username is already in use!");
                    res.end();
                }
                else {
                    const result2 = await connection.execute(
                        'INSERT INTO adameldredge.USERS (username, password) VALUES (:username, :password)',
                        [username, password]);
                    if (result2.rowsAffected > 0) {
                        const finalresult = await connection.execute('commit');
                        console.log("Username: " + username + " Password: " + password + " added.");
                        req.session.loggedin = true;
                        req.session.username = username;
                        console.log("user is logged in");
                        res.json("/");
                    }
                }
                connection.close();
            }
            else {
                res.json("Uh Oh! Passwords do not match.");
            }
        }
        else {
            res.json("Uh Oh! Please fill all fields.");
        }
        res.end();
    }
    catch (error) {

    } 
})

app.get('/cities', async (req, res) => {
    try{
        const connection = await oracledb.getConnection(config);
        const getCities = "SELECT DISTINCT city FROM adameldredge.weather"
        const result = await connection.execute(getCities);
        console.log(result.rows);
        res.json(result.rows);
        connection.close();
    }
    catch (error) {
        console.log(error);
        res.status(400).json({message:error})
    }
})

app.post('/examples1', async (req, res) => {
    const cityName = req.body.cityName.cityName;
    console.log("City Name: " + cityName);
    try{
        console.log('test1');
        const connection = await oracledb.getConnection(config);
        console.log('test2');
        const result = await connection.execute(
            "SELECT extract(month from entrydate) AS x, AVG(tempmax - tempmin) AS y FROM adameldredge.weather WHERE city = :cityName GROUP BY extract(month from entrydate) ORDER BY x",
            [cityName]);
        console.log(result.rows)
        res.json(result.rows);
        connection.close();
    }
    catch (error){
        console.log(error);
        res.status(400).json({message:error})
    }
})

app.post('/examples2', async (req, res) => {
    const cityName = req.body.cityName.cityName;
    console.log("City Name: " + cityName);
    try{
        console.log('test1');
        const connection = await oracledb.getConnection(config);
        console.log('test2');
        const result = await connection.execute(
            "SELECT extract(month from entrydate) AS month, AVG(windspeed) AS avgWindspeed FROM adameldredge.weather WHERE city = :cityName AND entrydate >= TO_DATE('2018-01-19', 'YYYY-MM-DD') AND entrydate < TO_DATE('2019-01-19', 'YYYY-MM-DD') GROUP BY extract(month from entrydate), extract(year from entrydate) ORDER BY extract(year from entrydate) ASC, month ASC",
            [cityName]);
        console.log(result.rows)
        res.json(result.rows);
        connection.close();
    }
    catch (error){
        console.log(error);
        res.status(400).json({message:error})
    }
})

app.post('/examples3', async (req, res) => {
    const cityName = req.body.cityName.cityName;
    const city2Name = req.body.city2Name.city2Name;
    console.log("City Name: " + cityName + "City 2 Name: " + city2Name);
    try{
        const connection = await oracledb.getConnection(config);
        //const ex3query = "SELECT extract(month from entrydate) AS x, MAX(CASE WHEN city = 'Tunis' THEN tempmax ELSE NULL END) AS tunis_y,MAX(CASE WHEN city = 'Cairo' THEN tempmax ELSE NULL END) AS cairo_y FROM adameldredge.weather WHERE city IN ('Tunis', 'Cairo') GROUP BY extract(month from entrydate) ORDER BY x";   
        const result = await connection.execute("SELECT extract(month from entrydate) AS x, MAX(CASE WHEN city = :cityName THEN tempmax ELSE NULL END) AS tunis_y,MAX(CASE WHEN city = :city2Name THEN tempmax ELSE NULL END) AS cairo_y FROM adameldredge.weather GROUP BY extract(month from entrydate) ORDER BY x",
        [cityName, city2Name]);
        console.log("City Name: " + cityName + " City 2 Name: " + city2Name)
        console.log(result.rows)
        res.json(result.rows);
        connection.close();
    }
    catch (error){
        console.log(error);
        res.status(400).json({message:error})
    }
})

app.post('/examples4', async (req, res) => {
    const cityName = req.body.cityName.cityName;
    const city2Name = req.body.city2Name.city2Name;
    console.log("City Name: " + cityName + " City 2 Name: " + city2Name);
    try{
        const connection = await oracledb.getConnection(config);
        const result = await connection.execute("SELECT EXTRACT(MONTH FROM a.ENTRYDATE) AS Month, AVG(a.WINDSPEED) AS city1wind, b.avg_windspeed AS city2wind FROM ADAMELDREDGE.WEATHER a JOIN (SELECT EXTRACT(MONTH FROM ENTRYDATE) AS month, AVG(Windspeed) AS avg_windspeed FROM ADAMELDREDGE.WEATHER WHERE City = :cityName AND WINDSPEED IS NOT NULL AND EXTRACT(YEAR FROM ENTRYDATE) = '2021' GROUP BY EXTRACT(MONTH FROM ENTRYDATE) ) b ON EXTRACT(MONTH FROM a.ENTRYDATE) = b.month WHERE a.WINDSPEED IS NOT NULL AND a.City = :city2Name AND EXTRACT(YEAR FROM a.ENTRYDATE) = '2021' GROUP BY EXTRACT(MONTH FROM a.ENTRYDATE), b.avg_windspeed ORDER BY 1", 
        [cityName, city2Name]);
        console.log(result.rows)
        res.json(result.rows);
        connection.close();
    }
    catch (error){
        console.log(error);
        res.status(400).json({message:error})
    }
})

app.post('/examples5', async (req, res) => {
    const cityName = req.body.cityName.cityName;
    const city2Name = req.body.city2Name.city2Name;
    console.log("City Name: " + cityName + " City Name: " + cityName);
    try{
        const connection = await oracledb.getConnection(config);
        const ex5query = "";    //this should be a query (sql statement in a string)
        const result = await connection.execute("SELECT CASE WHEN EXTRACT(MONTH FROM a.ENTRYDATE) IN (12, 1, 2) THEN 'Winter' WHEN EXTRACT(MONTH FROM a.ENTRYDATE) IN (3, 4, 5) THEN 'Spring' WHEN EXTRACT(MONTH FROM a.ENTRYDATE) IN (6, 7, 8) THEN 'Summer' ELSE 'Fall' END AS Season, AVG(a.WINDSPEED) AS City1, b.avg_windspeed AS City2 FROM ADAMELDREDGE.WEATHER a JOIN ( SELECT EXTRACT(MONTH FROM ENTRYDATE) AS month, AVG(Windspeed) AS avg_windspeed FROM ADAMELDREDGE.WEATHER WHERE City = :cityName AND WINDSPEED IS NOT NULL AND EXTRACT(YEAR FROM ENTRYDATE) BETWEEN '2019' AND '2021' GROUP BY EXTRACT(MONTH FROM ENTRYDATE) ) b ON EXTRACT(MONTH FROM a.ENTRYDATE) = b.month WHERE a.WINDSPEED IS NOT NULL AND a.City = :city2Name AND EXTRACT(YEAR FROM a.ENTRYDATE) BETWEEN '2019' AND '2021' GROUP BY CASE WHEN EXTRACT(MONTH FROM a.ENTRYDATE) IN (12, 1, 2) THEN 'Winter' WHEN EXTRACT(MONTH FROM a.ENTRYDATE) IN (3, 4, 5) THEN 'Spring' WHEN EXTRACT(MONTH FROM a.ENTRYDATE) IN (6, 7, 8) THEN 'Summer' ELSE 'Fall' END, b.avg_windspeed ORDER BY CASE WHEN season = 'Winter' THEN 1 WHEN season = 'Spring' THEN 2 WHEN season = 'Summer' THEN 3 WHEN season = 'Fall' THEN 4 END",
        [cityName, city2Name]);
        console.log(result.rows)
        res.json(result.rows);
        connection.close();
    }
    catch (error){
        console.log(error);
        res.status(400).json({message:error})
    }
})

app.post('/examples6', async (req, res) => {
    const cityName = req.body.cityName.cityName;
    const city2Name = req.body.city2Name.city2Name;
    console.log("City Name: " + cityName + " City Name: " + cityName);
    try{
        const connection = await oracledb.getConnection(config);
        const ex5query = "SELECT EXTRACT(MONTH FROM a.ENTRYDATE) AS Month, AVG(a.AIRPRESSURE) AS City1, b.avg_airpressure AS City2 FROM ADAMELDREDGE.WEATHER a JOIN (SELECT EXTRACT(MONTH FROM ENTRYDATE) AS month, AVG(AirPressure) AS avg_airpressure FROM ADAMELDREDGE.WEATHER WHERE City = :cityName AND AirPressure IS NOT NULL AND EXTRACT(YEAR FROM ENTRYDATE) = '2021' GROUP BY EXTRACT(MONTH FROM ENTRYDATE)) b ON EXTRACT(MONTH FROM a.ENTRYDATE) = b.month WHERE a.AIRPRESSURE IS NOT NULL AND a.City = :city2Name AND EXTRACT(YEAR FROM a.ENTRYDATE) = '2021' GROUP BY EXTRACT(MONTH FROM a.ENTRYDATE), b.avg_airpressure ORDER BY 1";    //this should be a query (sql statement in a string)
        const result = await connection.execute("SELECT EXTRACT(MONTH FROM a.ENTRYDATE) AS Month, AVG(a.AIRPRESSURE) AS City 1, b.avg_airpressure AS City 2 FROM ADAMELDREDGE.WEATHER a JOIN (SELECT EXTRACT(MONTH FROM ENTRYDATE) AS month, AVG(AirPressure) AS avg_airpressure FROM ADAMELDREDGE.WEATHER WHERE City = :cityName AND AirPressure IS NOT NULL AND EXTRACT(YEAR FROM ENTRYDATE) = '2021' GROUP BY EXTRACT(MONTH FROM ENTRYDATE)) b ON EXTRACT(MONTH FROM a.ENTRYDATE) = b.month WHERE a.AIRPRESSURE IS NOT NULL AND a.City = :city2Name AND EXTRACT(YEAR FROM a.ENTRYDATE) = '2021' GROUP BY EXTRACT(MONTH FROM a.ENTRYDATE), b.avg_airpressure ORDER BY 1",
        [cityName, city2Name]);
        console.log(result.rows)
        res.json(result.rows);
        connection.close();
    }
    catch (error){
        console.log(error);
        res.status(400).json({message:error})
    }
})
// CHECK IF USER IS AUTHED
app.get('/checkauth', async (req, res) => {
    if (req.session.loggedin === true) {
        res.json("yes");
        res.end();
        return;
    }
    else {
        res.json("no");
        res.end();
        return;
    }
})

// AUTHENTICATE USER
app.post('/auth', async (req, res) => {
    try {
        console.log(req.body)
        const username = req.body.username;
        const password = req.body.password;
        console.log("username: " + username);
        console.log("password: " + password);

        if (username && password) {
            const connection = await oracledb.getConnection(config);
            const result = await connection.execute
            ('SELECT * FROM adameldredge.USERS WHERE USERNAME = :username AND PASSWORD = :password',
            [username, password]);
            if (result.rows.length === 1) {
                req.session.loggedin = true;
                req.session.username = username;
                console.log("user is logged in");
                res.json("/");
            }
            else {
                res.json("Invalid username and/or password!");
                res.end();
                console.log(result.rows);
            }
            res.end();
            connection.close();
        }
        else {
            res.json("Enter username and password!")
            res.end();
        }
    }
    catch (error) {
        res.json("timeout error");
    }
})

app.listen(PORT, () => {console.log(`listening to port ${PORT}`);})