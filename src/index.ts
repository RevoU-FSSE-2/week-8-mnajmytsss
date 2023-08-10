import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.get("/", (req: Request, res: Response) => {
  res.send("Tugas Week 8 Rest API");
});

app.listen(port, () => {
  console.log(`server listen ${port}`);
});
