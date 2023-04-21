const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');
const app = express();
const PORT = 5000;
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

app.get('/examples1', async (req, res) => {
    try{
        console.log('test1');
        const connection = await oracledb.getConnection(config);
        console.log('test2');
        const ex1query = "SELECT ENTRYDATE, (TEMPMAX -  TEMPMIN) AS TEMPRANGE FROM adameldredge.weather WHERE CITY = 'Tunis'";
        const result = await connection.execute(ex1query);
        console.log(result.rows)
        res.json(result.rows);
    }
    catch (error){
        console.log(error);
        res.status(400).json({message:error})
    }
})
app.get('/student', async (req, res) =>{ 
    
        try{
            console.log('test1');
            const connection = await oracledb.getConnection(config);
            console.log('test2');
            const result = await connection.execute('SELECT COUNT(*) FROM adameldredge.weather');
            console.log('test3');
            console.log(result.rows)
            res.json(result.rows);
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