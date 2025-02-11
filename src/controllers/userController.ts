import knex from "knex";
import { Request, Response } from "express";
import config from "../../knexfile";
import userService from "../services/userService";

const db = knex(config);

async function findUserByEmail(
  req: Request,
  res: Response
): Promise<any | undefined> {
  try {
    const { email } = req.query;
    const user = await userService.findUserByEmail({
      email: email?.toString()
    });
    res.status(200).send(user);
  } catch (error) {
    res.send(`Error while finding user: ${error}`);
  }
}

async function getById(req: Request, res: Response): Promise<any | undefined> {
  try {
    const { id } = req.query;
    const user = await userService.getById({ id: id?.toString() });
    res.status(200).send(user);
  } catch (error) {
    res.send(`Error while getting by id: ${error}`);
  }
}

async function login(req: Request, res: Response): Promise<any | undefined> {
  try {
    const { email, password } = req.query;
    const user = await userService.findUserByEmail({
      email: email?.toString()
    });

    if (user.password == password) {
      const timestamp = new Date().getTime() + 900000;
      res.status(200).send(`${timestamp}`);
    } else {
      res.status(401).send("User not authorized");
    }
  } catch (error) {
    res.send(`Error while finding user: ${error}`);
  }
}

async function createUser(
  req: Request,
  res: Response
): Promise<any | undefined> {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    await userService.createUser(name, email, password);
    res.status(200).send("Created with success");
  } catch (error) {
    res.send(`Error while creating user: ${error}`);
  }
}

async function updateUser(
  req: Request,
  res: Response
): Promise<any | undefined> {
  try {
    const body = req.body;
    const recipe = await userService.updateUser(body.id, body);
    res.status(200).send(recipe);
  } catch (error) {
    res.send(`Error while updating user: ${error}`);
  }
}

async function deleteUser(
  req: Request,
  res: Response
): Promise<any | undefined> {
  try {
    const id = req.body.id;
    await userService.deleteUser(id);
    res.status(200).send("User deleted");
  } catch (error) {
    res.send(`Error while delete user: ${error}`);
  }
}

export default {
  findUserByEmail,
  getById,
  createUser,
  updateUser,
  deleteUser,
  login
};
