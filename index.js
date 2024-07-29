const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
	let siteName = "Adidas";
	let searchNow = "Search Now";
	let Name = "Avijit";
	res.render("index.ejs", { siteName, searchNow, Name });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
