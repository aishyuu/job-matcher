import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-nVmIF8tDllpbjxMq3CDGxgVH",
    apiKey: process.env.API_KEY
})

export default async function handler(req, res) {
    const { resume } = req.query
    const cleaned = resume.replaceAll('_', ' ');
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `The following is information in a resume. '${cleaned}' Give me a list of jobs that would be best suited for this resume`,
        temperature: 0.3,
        max_tokens: 100,
    })

    res.status(200).json({answer: response.data.choices[0].text})
}