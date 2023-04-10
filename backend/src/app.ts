import notionRouter from "./routes/notion";
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const port = process.env.PORT || 5001;

app.use("/submit", notionRouter);

app.listen(port, () => {
  console.log(`Server is now Running on ${port}`);
});
