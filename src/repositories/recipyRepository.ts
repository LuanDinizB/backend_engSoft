import knex from "knex";
import config from "../../knexfile";

const db = knex(config);

export async function getAllrecipes(): Promise<any | undefined> {
  try {
    const recipe = await db("recipes");
    return recipe;
  } catch (error) {
    throw error;
  }
}

export async function getById(id: number): Promise<any | undefined> {
  try {
    const recipe = await db("recipes").where("id", id).first();
    return recipe;
  } catch (error) {
    throw error;
  }
}

export async function getByUserId(userId: number): Promise<any | undefined> {
  try {
    const recipes = await db("recipes").where("userId", userId);
    return recipes;
  } catch (error) {
    throw error;
  }
}

export async function findRecipyByName(name: string): Promise<any | undefined> {
  try {
    const recipe = await db("recipes").where("name", name).first();
    return recipe;
  } catch (error) {
    throw error;
  }
}

export async function createRecipy(
  name: string,
  ingredients: string,
  prepareTime: string,
  difficulty: string,
  prepareMode: string,
  sustentable: string,
  userId: number,
  isIa: boolean
): Promise<any> {
  try {
    const recipe: any = await db("recipes").insert({
      name,
      ingredients,
      prepareTime,
      difficulty,
      prepareMode,
      sustentable,
      userId,
      isIa
    });
    return recipe;
  } catch (error) {
    throw error;
  }
}

export async function updateRecipy(
  id: number,
  name: string,
  ingredients: string,
  prepareTime: string,
  difficulty: string,
  prepareMode: string,
  sustentable: string,
  isIa: boolean
): Promise<void> {
  try {
    await db("recipes")
      .update({
        name,
        ingredients,
        prepareTime,
        difficulty,
        prepareMode,
        sustentable,
        isIa
      })
      .where({ id });
  } catch (error) {
    throw error;
  }
}

export async function deleteRecipy(id: number): Promise<any> {
  try {
    const recipe: any = await db("recipes").delete().where({ id });
    return recipe;
  } catch (error) {
    throw error;
  }
}

export default {
  findRecipyByName,
  getById,
  createRecipy,
  updateRecipy,
  deleteRecipy,
  getAllrecipes,
  getByUserId
};
