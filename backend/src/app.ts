import { Request, Response } from "express";
import notionRouter from "./routes/notion";
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const port = 5001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello WOrld");
});

app.use("/submit", notionRouter);

app.listen(port, () => {
  console.log(`Server is now Running on ${port}`);
});
