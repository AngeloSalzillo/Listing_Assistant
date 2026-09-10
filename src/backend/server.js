import express from 'express';
import Groq from 'groq-sdk';
import cors from 'cors';
import mockResponses from './mockResponses.js';
import 'dotenv/config';


const app = express();

// Middleware
app.use(express.json());
app.use(cors());


const aiClient = new Groq({
    apiKey: process.env.GROQ_API_KEY
});


app.post('/api/generate', async(req, res) => {

    const description = req.body.description;

    console.log('Received description:', description);
    
    // Prompt sent to the AI when mock mode is disabled
    const prompt = `Considering this description for a Wallapop article: 
            "${description}".
            Generate:
            1) A better listing title
            2) 3-5 tags
            3) A suggested price range
            
            Please provide the output in the following JSON format:
            {
                "title": "The better listing title",
                "tags": ["tag1", "tag2", ... , "tagN"],
                "price_range": "20-30€"
            }
                
            If the user's input does not describe a physical item that could
            reasonably be listed for sale on Wallapop, do not generate a listing.
            Instead, return null`;


    try {

        // Use a predefined response instead of calling the AI API during testing
        if (process.env.MOCK_MODE === 'true') {

            const mockIndex = Math.floor(Math.random() * mockResponses.length);

            const mockResponse = mockResponses[mockIndex];
            console.log(mockIndex)

            const data = JSON.parse(mockResponse);
            res.json(data);

            console.log(`Mocked AI Assistant responded: ${JSON.stringify(data)}`)

            return;
        }

        // Call the Groq API when mock mode is disabled
        const ai_response = await aiClient.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ],
            response_format: {
                type: "json_object"
            }
        });
        
        console.log(ai_response.choices[0].message.content);

        // Parse the AI's JSON response and send only the required fields
        const parsed_response = JSON.parse(ai_response.choices[0].message.content);

        res.json({
            title: parsed_response.title,
            tags: parsed_response.tags,
            price_range: parsed_response.price_range
        });

    } catch (error) {

        // Return a different message depending on whether mock or real AI is being used

        //console.error('Error generating listing:', error);
        if(!process.env.MOCK_MODE)
            res.status(500).json({ error: 'AI Assistant failed to generate a response' });
        else
            res.status(500).json({ error: 'Mocked AI Assistant failed to generate a response' });
    }
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});