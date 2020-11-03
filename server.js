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

app.get("./api/activities", (req, res) => {
    db
    .select()
    .from('activities')
    .then ((data) => {
        console.log(data)
        res.send(data);
    });
});
app.get("./api/activities/:id", (req, res) => {
    const {id } = req.params
    db
    .select()
    .from('activities')
    .where(id)
    .then ((data) => {
        console.log(data)
        res.send(data);
    });
});

app.listen(3000, (req,res) =>{

    console.log("Listening on port 3000")
})
}
