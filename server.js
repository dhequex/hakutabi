
const express = require("express")
const app = express();



app.get("/api/weather/:id", async (req, res) =>{
  
    const weather = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=36.6982&lon=137.8619&exclude={part}&appid=c77a135768188e873b69f273d312839c")
    
    try{
        res.json(weather)
        console.log ("Hello Weather")
    }
    catch{
        console.error("Error loading weather", err);
    res.sendStatus(500);
    }
})


app.listen(3000, (req,res) =>{

    console.log("Listening on port 3000")
})