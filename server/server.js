const express = require('express');// constant used later to set up the framework
const app = express();// used to initialise the express framework
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

var corsOptions = {
    origin: 'http://localhost:4200',
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));

app.get('/recieveData',function(req,res){
    console.log("recieved post request");
    res.status(200).send('data recieved');
    res.end();
})

// app.get('/recieveData',function(req, res){
//     res.status(200).send(req.body);
//     console.log("recieved request");
// });

app.listen(8000, () =>
{
    console.log("listening on port 8000");
})