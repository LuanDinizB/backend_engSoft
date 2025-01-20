import userController from "../controllers/userController";
import { Router } from "express";

const userRoute: Router = Router();

userRoute.get("/getRecipe", userController.findUserByEmail);

userRoute.get("/getById", userController.getById);

userRoute.post("/createRecipe", userController.createUser);

userRoute.delete("/deleteRecipe", userController.deleteUser);

userRoute.post("/updateRecipe", userController.updateUser);

export { userRoute };
