
import { GoogleGenAI, Type } from "@google/genai";

// Fix: Strictly follow Gemini API initialization guidelines using process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getStudyAdvice = async (subject: string, difficulty: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide 3 short, actionable study tips for a student struggling with ${subject} at a ${difficulty} level. Return a JSON array of strings.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });
    
    return JSON.parse(response.text || '[]');
  } catch (error) {
    console.error("Gemini Error:", error);
    return ["Review the fundamentals.", "Practice consistent problem-solving.", "Ask specific questions to tutors."];
  }
};

export const getWordOfTheDay = async () => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a foreign language "Word of the Day" for a secondary school student. Choose from French, Spanish, German, Japanese, or Latin. Return a JSON object with: word, translation, language, pronunciation, and a sample sentence.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            word: { type: Type.STRING },
            translation: { type: Type.STRING },
            language: { type: Type.STRING },
            pronunciation: { type: Type.STRING },
            sentence: { type: Type.STRING }
          },
          required: ["word", "translation", "language", "pronunciation", "sentence"]
        }
      }
    });
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      word: "Sapere Aude",
      translation: "Dare to know",
      language: "Latin",
      pronunciation: "sa-PEH-reh OW-deh",
      sentence: "The motto of the Enlightenment encourages students to use their own reason."
    };
  }
};
