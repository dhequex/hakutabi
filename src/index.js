const app = require("./server");
const db = require("../knex");

// importign seeding functions
// comment in local dev environment
const seedAmenities = require("../data/importAmenities");
const seedPayments = require("../data/importPaymentTypes");
const seedGasPrices = require("../data/importGas");
const seedLocation = require("../data/import");

// end seeding import

const PORT = process.env.PORT || 9000;

(async () => {
  try {
    console.log("Running migrations");
    await db.migrate.latest();

    // runs seeding functions for server
    // comment out in local dev environment after first run
    await seedLocation();
    console.log("locations table populated");

    await seedGasPrices();
    console.log("gasprices table populated");

    await seedAmenities();
    console.log("amenities table populated");

    await seedPayments();
    console.log("paymenttypes table populated");

    console.log("Starting express");
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();
