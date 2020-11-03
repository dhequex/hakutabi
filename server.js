const express = require("express")
const app = express();
const knex =  require('knex');
const config= require("./knexfile")
require('dotenv').config()
const db = knex(config);

launchExpressServer();

async function launchExpressServer (){

await db.migrate.latest()
.then(() => {
    console.log("Migrations Succeded")
})
.catch(console.error)


app.get("/api/activities", (req, res) =>{
   db.select
    res.json("HOLA API")
})

app.listen(3000, (req,res) =>{

    console.log("Listening on port 3000")
})
}
