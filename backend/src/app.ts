import { Response } from "express";
import notionRouter from "./routes/notion";
import cors, { CorsOptions } from "cors";

const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

// replace the empty string deployed url
// const allowedOrigins = ["http://localhost:3000", ""];

// const corsOptions: CorsOptions = {
//   origin: function (
//     origin: string | undefined,
//     callback: (error: Error | null, success: boolean) => void
//   ) {
//     if (allowedOrigins.indexOf(origin!) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"), false);
//     }
//   },
// };

// app.use(cors(corsOptions));
app.use(
  cors({
    origin: "*",
  })
);

const port = process.env.PORT || 5001;

app.use("/submit", notionRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Hello World" });
});

app.listen(port, () => {
  console.log(`Server is now Running on ${port}`);
});
