import geminiRepository from '../repositories/geminiRepository';


const callGemini = async (input: string) => {
    // TODO Implement your content generation logic here

    return await geminiRepository.generateContent(input);
}

export default { callGemini };
