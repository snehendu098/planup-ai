import openai from "./openaiconfig";

const generateAction = async (prompt, max_token) => {
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
    temperature: 0.7,
    max_tokens: max_token || 1250,
    top_p: 1,
  });

  const data = response.data.choices[0].text;
  return data;
};

export default generateAction;
