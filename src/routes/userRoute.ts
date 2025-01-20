import userController from "../controllers/userController";
import { Router } from "express";

const userRoute: Router = Router();

userRoute.get("/get", userController.findUserByEmail);

userRoute.get("/getById", userController.getById);

userRoute.post("/create", userController.createUser);

userRoute.delete("/delete", userController.deleteUser);

userRoute.post("/update", userController.updateUser);

export { userRoute };
