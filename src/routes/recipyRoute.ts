import recipyController from "../controllers/recipyController";
import { Router } from "express";

const recipyRoute: Router = Router();

recipyRoute.get("/getRecipe", recipyController.getByName);

recipyRoute.get("/getAllRecipes", recipyController.getAllrecipes);

recipyRoute.post("/createRecipe", recipyController.createRecipe);

recipyRoute.delete("/deleteRecipe", recipyController.deleteRecipe);

recipyRoute.get("/updateRecipe", recipyController.updateRecipe);

export { recipyRoute };
