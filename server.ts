import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const LESSON_NAMES = ['Beginner lesson', 'Intermediate coaching', 'Advanced performance', 'Private coaching'];

// Simple goal-based pick used when no API key is set or the AI call fails
const fallbackRecommendation = (goal: string = '') => {
  const lesson = goal.includes('first time') ? LESSON_NAMES[0]
    : goal.includes('green') ? LESSON_NAMES[1]
    : goal.includes('turns') ? LESSON_NAMES[2]
    : goal.includes('one-on-one') ? LESSON_NAMES[3]
    : LESSON_NAMES[0];
  return {
    recommendedLesson: lesson,
    rationale: `Based on your goal to ${goal.toLowerCase() || 'start surfing'}, this lesson gives you the right waves and the right amount of coaching.`,
    tip: 'Look where you want to go.',
    weeklyFrequency: '3 sessions per week'
  };
};

app.use(express.json());

// API endpoint for the AI surf lesson advisor powered by Gemini 2.5 Flash
app.post('/api/advisor', async (req, res) => {
  const { goal, experience, fitness } = req.body ?? {};
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.json(fallbackRecommendation(goal));
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = `You are a friendly, experienced head coach at 'BRAVE Surf School'.
Recommend the best lesson among: [${LESSON_NAMES.join(', ')}].

Surfer profile:
- Goal: ${goal}
- Experience: ${experience}
- Comfort in the water: ${fitness}

Respond with strictly JSON adhering to this schema:
{
  "recommendedLesson": "Exact lesson name from the list",
  "rationale": "2-3 encouraging sentences explaining why this lesson fits their goal and level",
  "tip": "A short, practical surf tip of 4-8 words",
  "weeklyFrequency": "e.g. 3-4 sessions per week"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '');
    res.json(parsed);
  } catch (error) {
    console.error('Error generating AI surf advice:', error);
    res.json(fallbackRecommendation(goal));
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    // Send every other route to the app so /lessons, /camps etc. work on refresh
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve('dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`BRAVE Surf School server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
