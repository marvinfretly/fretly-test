const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const port = 3100;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
