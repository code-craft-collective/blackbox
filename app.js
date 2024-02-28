const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const PORT = 5005 

const app = express();


// mongoose
//   .connect("mongodb://127.0.0.1:27017/{Put your database name here}")
//   .then((x) => console.log(`Connected to Database: "${x.connections[0].name}"`))
//   .catch((err) => console.error("Error connecting to MongoDB", err));

// MIDDLEWARE
// Research Team - Set up CORS middleware here:
// ...
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

//here is the routes
//.....


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
