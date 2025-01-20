import recipyRepository from "../repositories/recipyRepository";

const getAllrecipes = async () => {
  return await recipyRepository.getAllrecipes();
};

const getById = async (id: number) => {
  return await recipyRepository.getById(id);
};

const getRecipyByName = async (name: string) => {
  return await recipyRepository.findRecipyByName(name);
};

const createRecipy = async (recipyData: any) => {
  return await recipyRepository.createRecipy(
    recipyData.name,
    recipyData.ingredients,
    recipyData.prepareTime,
    recipyData.difficulty,
    recipyData.prepareMode,
    recipyData.sustentable,
    recipyData.userId
  );
};

const updateRecipy = async (id: number, recipyData: any) => {
  return await recipyRepository.updateRecipy(
    id,
    recipyData.name,
    recipyData.ingredients,
    recipyData.prepareTime,
    recipyData.difficulty,
    recipyData.prepareMode,
    recipyData.sustentable
  );
};

const deleteRecipy = async (id: number) => {
  return await recipyRepository.deleteRecipy(id);
};

export default {
  getAllrecipes,
  getById,
  getRecipyByName,
  createRecipy,
  updateRecipy,
  deleteRecipy
};
