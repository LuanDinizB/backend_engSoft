import recipyController from "../controllers/recipyController";
import { Router } from "express";

const recipyRoute: Router = Router();

recipyRoute.get("/getRecipe", recipyController.getByName);

recipyRoute.get("/getAllRecipes", recipyController.getAllrecipes);

recipyRoute.get("/getById", recipyController.getById);

recipyRoute.post("/createRecipe", recipyController.createRecipe);

recipyRoute.delete("/deleteRecipe", recipyController.deleteRecipe);

recipyRoute.post("/updateRecipe", recipyController.updateRecipe);

export { recipyRoute };
