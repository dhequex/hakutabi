const express = require("express")
const app = express();
require('dotenv').config()


app.get("/api/weather/key", (req, res) =>{
   
    try{
        
        JSON = res.json(weather)
        res.send(JSON)
    }
    catch{
        console.error("Error loading weather", err);
    res.sendStatus(500);
    }
})


app.listen(3000, (req,res) =>{

    console.log("Listening on port 3000")
})