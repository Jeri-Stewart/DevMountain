//imports and packages needed to create/run server
const express = require("express");
const cors = require("cors");

// initializing express
const app = express();

//middleware to help execute endppoint
app.use(express.json());
app.use(cors());

// dummy-data/fake database
const inventory = [
  "greeting card",
  "table",
  "chair",
  "milk",
  "boat",
  "cookies",
  "cheese",
  "shampoo",
  "conditioner",
  "face wash",
];

// endpoints: url & handler-function with a request(req) and a response object(res)
app.get("/api/inventory", (req, res) => {
  console.log(req.query);
  if (req.query.item) {
    // if the query exsits (or is true) emptry string will be false
    const filteredItems = inventory.filter((invItem) =>
      invItem.toLowerCase().includes(req.query.item.toLowerCase())
    );
    res.status(200).send(filteredItems);
  } else {
    res.status(200).send(inventory);
  }
  res.status(200).send(inventory);
});

// get endpints  with a param
app.get("/api/inventory/:id", (req, res) => {
  // console.log(req.params.id)
  const { id } = req.params; // destructured id
  res.status(200).send(inventory[id]);
});

app.get("./search", (req, res) => {
  // showing an anser of what a google search might look like
  const { q } = req.query;
  //make a databas call to locate all resources related to q
  res.sendFile();
});
// runs the server for us to port on 5050
app.listen(5050, () => console.log("jammin on 5050"));
