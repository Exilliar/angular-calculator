const express = require('express');// constant used later to set up the framework
const app = express();// used to initialise the express framework

app.listen(8000, () =>
{
    console.log("Server started");
})