import { Configuration, OpenAIApi } from "openai";

const apiKey = process.env.OPEN_AI_KEY;

const config = new Configuration({
    apiKey: apiKey
});

const openai = new OpenAIApi(config);

export default async function(req, res) {

    const textToConvert = JSON.parse(req.body).text || '';
    const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: completePrompt(textToConvert),
        temperature: 0.6
    });

    res.status(200).json({result: completion.data.choices[0].text });
}

function completePrompt(textInput) {
    const prompt = `
    I want you to act as a scriptwriter from game of thrones, transform the text I provide and style it as it was spoken in game of thrones. 

    Original Text:
    Call me as lord

    Game of Thrones Style:
    "You should address me as your grace"

    Original Text:
    "${textInput}"

    Game of Thrones Style:
    `
    return prompt;
}