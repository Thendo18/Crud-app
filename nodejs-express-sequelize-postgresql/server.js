require('dotenv').config()
const dbConfig = require("./config/db.config.js");
const express = require("express");
const sequelizec = require("sequelize");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// const router = express.Router();
const tutorials = require("./app/routes/tutorials.js");

var corsOptions = {
  origin: "http://localhost:8081"
};



app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route


// const db = require("./app/models/indexh");
// db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   }) 

app.get("/", (req, res) => {
  res.json({ message: "Welcome to thendo's application." });
});


// app.use('/api/tutorials', tutorials);
// app.use('/tutorial',require('./app/routes/tutorials.js'));
// require("./app/routes/turorial.routes")(app);
// set port, listen for requests
// set port, listen for requests

app.use((err,req,res)=>{
  console.log(err);
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




