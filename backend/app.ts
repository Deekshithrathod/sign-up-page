const express = require("express");
const addEmail = require("./helpers/emailHandlerNotion.js");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/submit", async (req, res) => {});

const port = 5001;
app.listen(port, () => {
  console.log(`Server is now Running on ${port}`);
});
