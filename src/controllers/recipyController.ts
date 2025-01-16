import knex from "knex";
import { Request, Response } from "express";
import config from "../../knexfile";
import recipyService from "../services/recipyService";

const db = knex(config);

 async function findRecipyByName(req: Request, res: Response): Promise<any | undefined> {
  try {
    const email = req.body.email;
    const recipy = await recipyService.getRecipyByName(email);
    return recipy;
  } catch (error) {
    res.send(`Error while finding by email: ${error}`);
  }
}

 async function createRecipy(
  name: string,
  email: string,
  password: string
): Promise<any> {
  try {
    const recipy: any = await db("recipy").insert({
      name,
      email,
      password
    });
    return recipy;
  } catch (error) {
    throw error;
  }
}

 async function deleteRecipy(email: string): Promise<any> {
  try {
    const recipy: any = await db("recipy").delete().where({ email });
    return recipy;
  } catch (error) {
    throw error;
  }
}

 async function updateRecipy(email: string, data: object): Promise<void> {
  try {
    await db("recipy").update(data).where({ email });
  } catch (error) {
    throw error;
  }
}

 async function updateRecipyPassword(
  email: string,
  password: string
): Promise<void> {
  try {
    await db("pharmacy")
      .update({
        password,
        data: null
      })
      .where({ email });
  } catch (error) {
    throw error;
  }
}

export default {
  findRecipyByName,
  createRecipy,
  updateRecipy,
  updateRecipyPassword,
  deleteRecipy
};
