const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.json({message: "Hello"});
});

app.listen(8080, () => {
	console.log("App is listening on port 8080");
});
