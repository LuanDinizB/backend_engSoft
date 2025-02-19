import userRepository from "../repositories/userRepository";

const getById = async ({ id }: { id: string | undefined }) => {
  if (id?.trim() === "" || id === undefined) {
    throw new Error("Id is required");
  }
  return await userRepository.getById(id);
};

const findUserByEmail = async ({ email }: { email: string | undefined }) => {
  if (email?.trim() === "" || email === undefined) {
    throw new Error("Email is required");
  }
  return await userRepository.findUserByEmail(email);
};

const createUser = async (name: string, email: string, password: string) => {
  return await userRepository.createUser(name, email, password);
};

const updateUser = async (email: string, data: { [key: string]: any }) => {
  delete data.email;
  return await userRepository.updateUser(email, data);
};


const deleteUser = async (id: string) => {
  if (id === undefined) {
    throw new Error("Id is required");
  }
  return await userRepository.deleteUser(id);
};

export default {
  getById,
  findUserByEmail,
  createUser,
  updateUser,
  deleteUser
};
