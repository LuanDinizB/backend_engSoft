import knex from "knex";
import { Request, Response } from "express";
import config from "../../knexfile";
import recipeService from "../services/recipyService";

const db = knex(config);



async function getAllrecipes(req: Request, res: Response): Promise<any | undefined> {
  try {
    const recipes = await recipeService.getAllrecipes();
    res.status(200).send(recipes);
  } catch (error) {
    res.send(`Error while finding by email: ${error}`);
  }
}

 async function getByName(req: Request, res: Response): Promise<any | undefined> {
  try {
    const name = req.body.name;
    const recipe = await recipeService.getRecipyByName(name);
    res.status(200).send(recipe);
  } catch (error) {
    res.send(`Error while finding by email: ${error}`);
  }
}

async function createRecipe(req: Request, res: Response): Promise<any | undefined> {
  try {
    const body = req.body;
    const recipe = await recipeService.createRecipy(body);
    res.status(200).send(recipe);
  } catch (error) {
    res.send(`Error while finding by email: ${error}`);
  }
}


async function updateRecipe(req: Request, res: Response): Promise<any | undefined> {
  try {
    const body = req.body;
    const recipe = await recipeService.updateRecipy(body.id,body);
    res.status(200).send(recipe);
  } catch (error) {
    res.send(`Error while finding by email: ${error}`);
  }
}


async function deleteRecipe(req: Request, res: Response): Promise<any | undefined> {
  try {
    const id = req.body.id;
    await recipeService.deleteRecipy(id)
    res.status(200).send("Recipe deleted");
  } catch (error) {
    res.send(`Error while finding by email: ${error}`);
  }
}


export default {
  getAllrecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getByName
};
