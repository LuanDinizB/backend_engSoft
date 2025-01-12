import recipyRepository from '../repositories/recipyRepository';



export const getAllrecipes = async () => {
    return await recipyRepository.getAllrecipes();
};

export const getRecipyByName = async (name: string) => {
    return await recipyRepository.findRecipyByName(name);
};

export const createRecipy = async (recipyData: any) => {
    return await recipyRepository.createRecipy(recipyData.name, recipyData.ingredients, recipyData.prepareTime, recipyData.difficulty, recipyData.prepareMode, recipyData.sustentable);
};

export const updateRecipy = async (id:number, recipyData: any) => {
    return await recipyRepository.updateRecipy(id,recipyData.name, recipyData.ingredients, recipyData.prepareTime, recipyData.difficulty, recipyData.prepareMode, recipyData.sustentable);
};

export const deleteRecipy = async (id: number) => {
    return await recipyRepository.deleteRecipy(id);
};
