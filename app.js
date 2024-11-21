import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get("/", (req,res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get("/acasa", (req,res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get("/galerie", (req,res) => {
    res.sendFile(__dirname + '/views/galerie.html')
})

app.get("/contact", (req,res) => {
    res.sendFile(__dirname + '/views/contact.html')
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});


