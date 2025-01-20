import knex from "knex";
import { Request, Response } from "express";
import config from "../../knexfile";
import recipeService from "../services/recipyService";

const db = knex(config);

async function getAllrecipes(
  req: Request,
  res: Response
): Promise<any | undefined> {
  try {
    const recipes = await recipeService.getAllrecipes();
    res.status(200).send(recipes);
  } catch (error) {
    res.send(`Error while getting all recipes: ${error}`);
  }
}

async function getById(
  req: Request,
  res: Response
): Promise<any | undefined> {
  try {
    const {id} = req.query;
    const recipe = await recipeService.getById({id: id?.toString()});
    res.status(200).send(recipe);
  } catch (error) {
    res.send(`Error while getting by name: ${error}`);
  }
}

async function getByName(
  req: Request,
  res: Response
): Promise<any | undefined> {
  try {
    const name = req.body.name;
    const recipe = await recipeService.getRecipyByName(name);
    res.status(200).send(recipe);
  } catch (error) {
    res.send(`Error while getting by name: ${error}`);
  }
}

async function createRecipe(
  req: Request,
  res: Response
): Promise<any | undefined> {
  try {
    const body = req.body;
    await recipeService.createRecipy(body);
    res.status(200).send("Created with success");
  } catch (error) {
    res.send(`Error while creating recipe: ${error}`);
  }
}

async function updateRecipe(
  req: Request,
  res: Response
): Promise<any | undefined> {
  try {
    const body = req.body;
    const recipe = await recipeService.updateRecipy(body.id, body);
    res.status(200).send(recipe);
  } catch (error) {
    res.send(`Error while updating recipe: ${error}`);
  }
}

async function deleteRecipe(
  req: Request,
  res: Response
): Promise<any | undefined> {
  try {
    const id = req.body.id;
    await recipeService.deleteRecipy(id);
    res.status(200).send("Recipe deleted");
  } catch (error) {
    res.send(`Error while delete recipe: ${error}`);
  }
}

export default {
  getAllrecipes,
  getById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getByName

};
