import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Define an interface for the response structure
interface GeminiResponse {
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

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private apiUrl = 'http://localhost:3333/prompt';
  private evaluationUrl = 'http://localhost:3333/evaluateAssignment'; // New URL for assignment evaluation

  constructor(private http: HttpClient) { }

  // Method for general conversation
  getResponse(prompt: string): Observable<GeminiResponse> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<GeminiResponse>(`${this.apiUrl}?prompt=${encodeURIComponent(prompt)}`, { headers });
  }

  // Method for evaluating the assignment
  // evaluateAssignment(question: string, answer: string): Observable<any> {
  //   const params = new HttpParams()
  //     .set('question', question)
  //     .set('answer', answer);
  
  //   const headers = { 'Content-Type': 'application/json' };
  //   return this.http.get<any>(`${this.evaluationUrl}`, { headers, params });
  // }

  evaluateAssignment(question: string, answer: string): Observable<any> {
    console.log(question, answer)
    const body = { question, answer };
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(`${this.evaluationUrl}`, body, { headers });
  }
  
}
