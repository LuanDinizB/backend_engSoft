import knex from "knex";
import config from "../../knexfile";

const db = knex(config);

export async function findRecipyByName(name: string): Promise<any | undefined> {
  try {
    const user = await db("recipes").where("name", name).first();
    return user;
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
  sustentable: boolean
): Promise<any> {
  try {
    const user: any = await db("recipes").insert({
      name,
      ingredients,
      prepareTime,
      difficulty,
      prepareMode,
      sustentable
    });
    return user;
  } catch (error) {
    throw error;
  }
}

export async function deleteRecipy(id: number): Promise<any> {
  try {
    const user: any = await db("recipes").delete().where({ id });
    return user;
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
  sustentable: boolean
): Promise<void> {
  try {
    await db("recipes")
      .update({
        name,
        ingredients,
        prepareTime,
        difficulty,
        prepareMode,
        sustentable
      })
      .where({ id });
  } catch (error) {
    throw error;
  }
}

export default {
  findRecipyByName,
  createRecipy,
  updateRecipy,
  deleteRecipy
};
