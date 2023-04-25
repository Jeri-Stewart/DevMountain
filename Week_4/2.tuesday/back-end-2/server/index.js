const express = require("express");
const cors = require("cors");
const app = express();

// using controller
const controller = require("./controller");
// destructure the variables
const { getHouses, createHouse, updateHouse, deleteHouse } = controller;

// middleware
app.use(express.json());
app.use(cors());

// set up endpoints
app.get("/api/houses", getHouses);
app.post("/api/houses", createHouse);
app.put("/api/houses/:id", updateHouse);
app.delete("/api/houses/:id", deleteHouse);

app.listen(4004, () => console.log("Server running on 4004"));
