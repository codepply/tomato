//imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();

//declarations
const app = express();

//middleware use
app.use(express.json());

//routes
app.get("/", (req, res) => {
	res.json({message: "Hello World"});
});

app.listen(process.env.PORT || 8080, () => {
	console.log(`App is listening on port ${process.env.PORT}`);
});
