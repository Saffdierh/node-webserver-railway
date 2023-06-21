import express from "express";
import fs from "fs";
import hbs from "hbs";
import 'dotenv/config'

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(fs.realpathSync(".") + "/views/partials");

// Servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("home", {
		nombre: "jair camacho",
		titulo: "Curso de Node",
	});
});

app.get("/generic", (req, res) => {
	res.render("generic", {
		nombre: "jair camacho",
		titulo: "Curso de Node",
	});
});

app.get("/elements", (req, res) => {
	res.render("elements", {
		nombre: "jair camacho",
		titulo: "Curso de Node",
	});
});
app.get("*", (req, res) => {
	res.sendFile(fs.realpathSync(".") + "/public/404.html");
});

app.listen(port);
