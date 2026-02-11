
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult, FeedbackReport, GroundingSource } from "../types";

export const analyzeFeedback = async (query: string): Promise<AnalysisResult> => {
  const ai = import.meta.env.VITE_API_KEY;
  
  const systemInstruction = `
    You are a highly advanced market analyst and sentiment engine. 
    Your task is to provide a "360-degree feedback report" for the user's query.
    
    CRITICAL INSTRUCTIONS:
    1. Use Google Search to gather data from across the social web, including:
       - YouTube comments and video summaries
       - Reddit discussions and community threads
       - X (formerly Twitter) trends, posts, and replies
       - LinkedIn professional opinions and company-related discourse
       - Facebook public groups and pages
       - Vimeo video reviews
       - General web reviews and articles
    2. Analyze the honest, unfiltered, and professional feedback found on these platforms.
    3. Synthesize the findings into a numeric sentiment score (0-100), top pros, top cons, and a final verdict.
    4. EXTRACT 5-8 REPRESENTATIVE QUOTES or "Top Comments" across these platforms that capture the core sentiment.
    5. You must respond in a structured JSON format matching the requested schema.
  `;

  const prompt = `Provide a comprehensive 360-degree feedback report for: "${query}". 
  Ensure you look for professional opinions on LinkedIn and real-time trends on X (Twitter), alongside YouTube, Reddit, and Facebook feedback.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            sentimentScore: {
              type: Type.NUMBER,
              description: "A score from 0 to 100 where 100 is extremely positive.",
            },
            sentimentLabel: {
              type: Type.STRING,
              description: "Positive, Negative, or Neutral.",
            },
            summary: {
              type: Type.STRING,
              description: "A brief summary of the public perception.",
            },
            pros: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Top 3-5 praised features or aspects.",
            },
            cons: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Top 3-5 recurring complaints or issues.",
            },
            verdict: {
              type: Type.STRING,
              description: "A final 'Verdict' paragraph summarizing whether the topic is worth attention/purchase.",
            },
            topComments: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  text: { type: Type.STRING, description: "The content of the comment or quote." },
                  author: { type: Type.STRING, description: "The username or 'Anonymous'." },
                  platform: { type: Type.STRING, enum: ["YouTube", "Reddit", "Facebook", "Messenger", "Vimeo", "Web", "LinkedIn", "X"] }
                },
                required: ["text", "author", "platform"]
              },
              description: "5-8 representative comments from the platforms.",
            }
          },
          required: ["sentimentScore", "sentimentLabel", "summary", "pros", "cons", "verdict", "topComments"],
        },
      },
    });

    const report: FeedbackReport = JSON.parse(response.text || "{}");
    
    // Extract sources from grounding metadata
    const sources: GroundingSource[] = [];
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (chunks) {
      chunks.forEach((chunk: any) => {
        if (chunk.web?.uri && chunk.web?.title) {
          sources.push({
            title: chunk.web.title,
            uri: chunk.web.uri
          });
        }
      });
    }

    // Deduplicate sources
    const uniqueSources = Array.from(new Map(sources.map(s => [s.uri, s])).values());

    return {
      report,
      sources: uniqueSources
    };
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw error;
  }
};
