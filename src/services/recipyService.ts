import recipyRepository from "../repositories/recipyRepository";

const getAllrecipes = async () => {
  return await recipyRepository.getAllrecipes();
};

const getById = async ({ id }: { id: string | undefined }) => {
  if (id?.trim() === "" || id === undefined) {
    throw new Error("Id is required");
  }
  return await recipyRepository.getById(Number(id));
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
    recipyData.userId,
    recipyData.isIa
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
    recipyData.sustentable,
    recipyData.isIa
  );
};

const deleteRecipy = async ({ id }: { id: string | undefined }) => {
  if (id?.trim() === "" || id === undefined) {
    throw new Error("Id is required");
  }

  return await recipyRepository.deleteRecipy(Number(id));
};

export default {
  getAllrecipes,
  getById,
  getRecipyByName,
  createRecipy,
  updateRecipy,
  deleteRecipy
};
