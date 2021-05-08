const express = require("express");
const faker = require ("faker");
const app = express();
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }));

app.use("/api", require("./controllers/index"));


app.listen( port, () => console.log(`Listening on port: ${port}`) );