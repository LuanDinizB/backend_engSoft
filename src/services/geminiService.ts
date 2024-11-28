import geminiRepository from "../repositories/geminiRepository";

const callGemini = async (input: string) => {
  // TODO Implement your content generation logic here
  const premadeText = "";
  // const premadeText = `todas as respostas precisam estar relacionadas a receitas, priorizando
  // as brasileiras tradicionais (como feijoada, pão de queijo, brigadeiro, etc.) e receitas internacionais
  // amplamente conhecidas (como lasanha, sushi, pizza, etc.). As respostas devem ser apresentadas exclusivamente
  //  no formato JSON, com as propriedades: "nome" (nome da receita), "ingredientes" (lista detalhada de ingredientes),
  //   "tempo_de_preparo" (tempo estimado de preparo em minutos ou horas), "dificuldade_de_preparo" (nível de dificuldade: fácil, médio ou difícil)
  //   e "preparo" (passo a passo detalhado para executar a receita). Além disso, as respostas devem ser limitadas
  //   a 350 palavras e não podem incluir informações fora do contexto de receitas ou culinária.`;
  input = input + premadeText;
  return await geminiRepository.generateContent(input);
};

export default { callGemini };
