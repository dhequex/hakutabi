const express = require("express")
const app = express();
const knex =  require('knex');
const config= require("./knexfile")
require('dotenv').config()
const db = knex(config);
const fs = require("fs");

launchExpressServer();

const importActivities = require("./data/importActivities.js");


async function launchExpressServer (){

await db.migrate.latest()
.then(() => {
    console.log("Migrations Succeded")
})
.catch(console.error);

await importActivities()
console.log("Activities Imported Successfully");

app.use(express.json());

app.get("/api", (req, res) => {
    
        res.json("ACTIVO");
});

app.get("/api/activities", (req, res) => {
    db
    .select()
    .from('activities')
    .then ((data) => {
        
        res.json(data);
    });
});
app.get("/api/activities/:id", (req, res) => {
    const { id } = req.params
    db
    .select()
    .from('activities')
    .where(id)
    .then ((data) => {
        res.send(data);
    });
});
app.get("/api/activities/:id", async (req, res) => {
    const activityId = req.params

      const title = await db
        .table("activities")
        .select("title")
        .where({ id: activityId });
     
      res.json(title)
      
  });

app.listen(3000, (req,res) =>{

    console.log("Listening on port 3000")
})
}
