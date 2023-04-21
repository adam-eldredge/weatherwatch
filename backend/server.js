const PORT = 5005;
const oracledb = require('oracledb');
const cors = require('cors');
const express = require('express');
const session = require('express-session');

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
const { useParams } = require('react-router-dom');
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
        console.log(error);
        res.status(400).json({message:error})
    }
})

app.listen(PORT, () => {console.log(`listening to port ${PORT}`);})