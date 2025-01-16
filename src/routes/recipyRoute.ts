import recipyController from '../controllers/recipyController';
import { Router } from 'express';

const askGemini: Router = Router();

askGemini.get('/getRecipy', recipyController.findRecipyByEmail);

export { askGemini };
