const express = require('express');
require('./dbConnection/conn')
const studentRouter = require('./router/students')

const app = express();
const port = 3000;

app.use(express.json()) //to recognize that incoming object is JSON object
app.use(studentRouter)

app.listen(port, () => {
    console.log(`Connection is at ${port}`);
})

