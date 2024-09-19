export interface GeminiResponse {
    candidates: Array<{
      content: {
        parts: Array<{ text: string }>;
      };
      finishReason: string;
      index: number;
      safetyRatings: Array<{
        category: string;
        probability: string;
      }>;
    }>;
    usageMetadata: {
      promptTokenCount: number;
      candidatesTokenCount: number;
      totalTokenCount: number;
    };
  }
  