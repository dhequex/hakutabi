const fs = require("fs");
const knex =  require('knex');
const config= require("../knexfile")
require('dotenv').config()
const db = knex(config);

const importActivity = async () => {
  try {
    const activities = JSON.parse(
      fs.readFileSync(__dirname + "/activities.json")
    );
    
    for (const activity of activities) {
      const title = activity.title;
      const description = activity.description;
      const location = activity.location;
      const photo = activity.photo;
      const price = activity.price;
      const short_description = activity.short_description;

      const activityResult = await db('activities').insert({
        title,
        description,
        location,
        photo,
        price,
        short_description,
      });
      console.log(activityResult);
    }
    return;
  } catch (err) {
    console.error("Error inserting records", err);
  }
};

// seedLocation();
module.exports = importActivity;
