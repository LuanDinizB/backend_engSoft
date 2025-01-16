import recipyController from '../controllers/recipyController';
import { Router } from 'express';

const recipyRoute: Router = Router();

recipyRoute.get('/getRecipy', recipyController.findRecipyByName);

export { recipyRoute };
