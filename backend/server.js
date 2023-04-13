const express = require('express');
const oracledb = require('oracledb');
const app = express();
const PORT = 5000;
const config = {
    user: 'siriwardhanea',
    password: 'uRWraeOA0XAnIBCco1KLrnkB',
    connectString: '//oracle.cise.ufl.edu/orcl',
};
app.get('/', (req, res) => {res.send('Hello World!')})

app.get('/student', (req, res) =>{ 
    async function getStudentData(){
        try{
            console.log('test1');
            const connection = await oracledb.getConnection(config);
            console.log('test2');
            const result = await connection.execute('SELECT * FROM siriwardhanea.Student');
            console.log('test3');
            console.log(result.rows)
            return result.rows;

        }
        catch (error){
            return error;
        }
    }

    getStudentData().then(dbRes =>{
        res.send(dbRes);
    })
})

app.listen(PORT, () => {console.log(`listening to port ${PORT}`);})