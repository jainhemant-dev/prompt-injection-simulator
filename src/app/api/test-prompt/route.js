import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
    try {
        const { systemPrompt, userPrompt } = await request.json();

        if (!systemPrompt || !userPrompt) {
            return new Response(
                JSON.stringify({ error: 'System prompt and user prompt are required' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: systemPrompt,
                },
                {
                    role: 'user',
                    content: userPrompt,
                },
            ],
            temperature: 0.7,
            max_tokens: 500,
        });

        return new Response(
            JSON.stringify({
                response: completion.choices[0].message.content,
            }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    } catch (error) {
        console.error('Error processing prompt:', error);
        return new Response(
            JSON.stringify({
                error: 'Failed to process prompt',
                details: error.message,
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}