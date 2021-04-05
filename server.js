const express = require("express")
const app = express();
const knex =  require('knex');
const config= require("./knexfile")
require('dotenv').config()
const db = knex(config);
const fs = require("fs");
const Airtable = require('airtable');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: `${process.env.AIRTABLE_API_KEY}`
});

var base = new Airtable({apiKey: `${process.env.AIRTABLE_API_KEY}`}).base('appptozv0YeMrByuW');


app.use(express.json());
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

app.get("/airtable/api", (req, res) => {
    
    base('activities').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 5,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
            console.log('Retrieved', record.get('title'));
        })
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
})


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

app.listen(process.env.PORT || 3000, (req, res) => {
	console.log("Listening on port 3000");
});
}
