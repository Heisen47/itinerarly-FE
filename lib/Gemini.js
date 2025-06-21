import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_Gemini_API });

export default async function Gemini(placeName) {
  const models = ["gemini-2.0-flash", "gemini-2.5-flash"];
  let currentModelIndex = 0;

  async function tryGenerate() {
    try {
      const response = await ai.models.generateContent({
        model: models[currentModelIndex],
        contents: `Return two points in less than 25 words
                  1. Best time to visit ${placeName}
                  2. Top three attractions in ${placeName}`,
      });
      return response.text;
    } catch (error) {
      if (error.message?.includes('rate limit') && currentModelIndex < models.length - 1) {
        currentModelIndex++;
        return tryGenerate(); 
      }
      console.error("Error generating content:", error);
      return "Failed to generate content";
    }
  }

  return tryGenerate();
}