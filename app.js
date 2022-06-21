let express = require("express");
let path = require("path");
let app = express();
let port = 3030

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "home.html")));
app.get("/babbage", (req, res) => res.sendFile(path.resolve(__dirname, "views", "babbage.html")));
app.get("/berners-lee", (req, res) => res.sendFile(path.resolve(__dirname, "views", "berners-lee.html")));
app.get("/clarke", (req, res) => res.sendFile(path.resolve(__dirname, "views", "clarke.html")));
app.get("/hamilton", (req, res) => res.sendFile(path.join(__dirname, "views", "hamilton.html")));
app.get("/hopper", (req, res) => res.sendFile(path.resolve(__dirname, "views", "hopper.html")));
app.get("/lovelace", (req, res) => res.sendFile(path.resolve(__dirname, "views", "lovelace.html")));
app.get("/turing", (req, res) => res.sendFile(path.resolve(__dirname, "views", "turing.html")));
app.get("*", (req,res) => res.sendFile(path.join(__dirname,"views","404.html")))

app.listen(port, () => console.log(`Servidor levantado con exito en http://localhost:${port}`));