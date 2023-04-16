const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');
const app = express();
const PORT = 5005;
const config = {
    user: 'siriwardhanea',
    password: 'uRWraeOA0XAnIBCco1KLrnkB',
    connectString: '//oracle.cise.ufl.edu/orcl',
};
app.use(cors());

app.get('/', (req, res) => {
    const data = { message: "Hello from server" };
    res.json(data);
})

app.get('/favorites', (req, res) => {
    res.json({
        bla: "bleh"
    })
})

app.get('/weathertuples', async (req, res) =>{ 
    
        try{
            console.log('Awaiting connection to database...');
            const connection = await oracledb.getConnection(config);
            console.log('Connected. Fetching number of tuples from database...');
            const result = await connection.execute('SELECT COUNT(*) FROM adameldredge.weather');
            console.log('Logging results... :');
            console.log(result.rows)
            res.json(result.rows);
            console.log('closing connection...');
            connection.close();
            console.log('Connection closed.');
        }
        catch (error){
            console.log(error);
            res.status(400).json({message:error})
        }
    }

    /*getStudentData().then(dbRes =>{
        res.send(dbRes);
    })*/
)

app.listen(PORT, () => {console.log(`listening to port ${PORT}`);})