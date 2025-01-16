import knex from "knex";
import config from "../../knexfile";

const db = knex(config);

export async function findUserByEmail(email: string): Promise<any | undefined> {
  try {
    const user = await db("user").where("email", email).first();
    return user;
  } catch (error) {
    throw error;
  }
}

export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<any> {
  try {
    const user: any = await db("user").insert({
      name,
      email,
      password
    });
    return user;
  } catch (error) {
    throw error;
  }
}

export async function deleteUser(email: string): Promise<any> {
  try {
    const user: any = await db("user").delete().where({ email });
    return user;
  } catch (error) {
    throw error;
  }
}

export async function updateUser(email: string, data: object): Promise<void> {
  try {
    await db("user").update(data).where({ email });
  } catch (error) {
    throw error;
  }
}

export async function updateUserPassword(
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
  findUserByEmail,
  createUser,
  updateUser,
  updateUserPassword,
  deleteUser
};
