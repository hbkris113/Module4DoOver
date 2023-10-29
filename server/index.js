const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getAssurance, getQuotes, getAdvice } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.get("/api/assurance", getAssurance);

app.get("/api/quotes", getQuotes);

app.get("/api/advice", getAdvice);

app.listen(4000, () => console.log("Server running on 4000"));
