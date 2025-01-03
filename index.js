const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');
const https = require('https'); // Import the https module for agent

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const PROXY_URL = process.env.PROXY_URL;

const httpsAgent = new https.Agent({
  proxy: PROXY_URL
});


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// 获取模型列表
app.get('/models', async (req, res) => {
  const headers = {
    "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
    "Content-Type": "application/json"
  };

  try {
    const response = await axios.get("https://openrouter.ai/api/v1/models", { 
      headers: headers,
       httpsAgent: httpsAgent
    });
    if (response.data && Array.isArray(response.data.data)) {
      const models = response.data.data.map(model => model.id); // 提取模型 ID
      res.json({ models });
    } else {
      res.status(500).json({ error: "Failed to fetch models from OpenRouter." });
    }
  } catch (error) {
    console.error('OpenRouter API Error:', error);
    res.status(500).json({ error: `OpenRouter API Error: ${error.message}` });
  }
});

app.post('/ask', async (req, res) => {
    const { question, model } = req.body;

    if (!question) {
        return res.status(400).json({ error: 'Missing question' });
    }

    const headers = {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
    };

    const payload = {
        "model": model || "openai/gpt-3.5-turbo",  // Default model if not provided
        "messages": [
            { "role": "user", "content": question }
        ]
    };

    try {
        const response = await axios.post("https://openrouter.ai/api/v1/chat/completions", payload, { 
            headers: headers,
            httpsAgent: httpsAgent
         });
        response.data.choices = response.data.choices || [];

        if (response.data.choices.length === 0) {
            return res.status(500).json({ error: 'No answer found from OpenRouter' });
        }
        const answer = response.data.choices[0].message.content;
        res.json({ answer });
    } catch (error) {
        console.error('OpenRouter API Error:', error);
        res.status(500).json({ error: `OpenRouter API Error: ${error.message}` });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});