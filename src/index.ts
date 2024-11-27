// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { askGemini } from "./routes/geminiRoute";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/", askGemini);
app.get("/teste", (req: Request, res: Response) =>{
  res.send("teste")
})

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});