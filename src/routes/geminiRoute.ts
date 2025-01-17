import generateContent from "../controllers/geminiController";
import { Router } from "express";

const askGemini: Router = Router();

askGemini.post("/askTheQuestion", generateContent);

export { askGemini };
