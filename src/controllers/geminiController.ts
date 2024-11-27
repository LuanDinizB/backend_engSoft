import { Request, Response } from "express";
import geminiService from "../services/geminiService";

const generateContent = async (req: Request, res: Response): Promise<void> => {
  try {
    //TODO alterar isso aqui né
    const text = req.body.text;
    const result = await geminiService.callGemini(`${text}`);
    const answer = result.response.text();
    res.status(200).send(answer);
  } catch (err) {
    res.send(`Error on gemini: ${err}`);
  }
};

export default  generateContent ;
