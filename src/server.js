import { config } from 'dotenv'
config({ path: '/Users/zohaiba/dream/dream/src/.env'})
import { Configuration, OpenAIApi } from 'openai'
import express from 'express'
import cors from 'cors'

//create the express app
const app = express()
//allow cross origin requests
app.use(cors())
//allow only json requests
app.use(express.json())
console.log(process.env.OPENAI_API_KEY)
//read in the openAI key from .env
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
//create a route for the root
app.post('/dream', async (req, res) => {
    try {
        const prompt = req.body.prompt
        const response = await openai.createImage({
            prompt: prompt,
            n:1, 
            size: '1024x1024'})
        const image = response.data.data[0].url
        res.send({image})
    } catch (error) {
        console.log(error)
        res.status(500).send(error?.response.data.error.message || 'Something went wrong');

    }

})

app.listen(8080, () => console.log("Server is running on port 8080."));
