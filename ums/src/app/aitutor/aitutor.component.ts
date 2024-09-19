import { Component } from '@angular/core';
import { GeminiService } from '../gemini.service';
import { GeminiResponse } from '../gemini-response.model';

@Component({
  selector: 'app-aitutor',
  templateUrl: './aitutor.component.html',
  styleUrls: ['./aitutor.component.css']
})
export class AitutorComponent {
  prompt: string = '';
  messages: Array<{ type: string, sender: string, text: string }> = [];
  errorMessage: string = '';

  constructor(private geminiService: GeminiService) { }

  sendPrompt(): void {
    if (this.prompt.trim()) {
      // Add user message to the conversation
      this.messages.push({ sender: 'You', text: this.prompt,type: 'you' });

      this.geminiService.getResponse(this.prompt).subscribe(
        (data: GeminiResponse) => {
          let aiResponse = '';
          if (data.candidates.length > 0) {
            const candidate = data.candidates[0];
            if (candidate.content && candidate.content.parts.length > 0) {
              aiResponse = candidate.content.parts[0].text;
            }
          }

          // Add AI response to the conversation
          this.messages.push({ type: 'ai', sender: 'AI', text: '' }); // Placeholder for streaming response

          // Start streaming the response
          this.streamResponse(aiResponse);

          this.prompt = ''; // Clear the input box
          this.errorMessage = ''; // Clear error message if successful

          // Scroll to the bottom of the conversation
          setTimeout(() => {
            const conversationDiv = document.querySelector('.conversation');
            if (conversationDiv) {
              conversationDiv.scrollTop = conversationDiv.scrollHeight;
            }
          }, 0);
        },
        (error) => {
          console.error('Error:', error);
          this.errorMessage = 'Failed to fetch response from AI service. Please try again later.';
        }
      );
    } else {
      console.warn('Prompt is empty.');
    }
  }

  private streamResponse(fullText: string): void {
    const messageIndex = this.messages.length - 1;
    const delay = 50; // Adjust this delay for faster or slower typing
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        this.messages[messageIndex].text += fullText[currentIndex];
        currentIndex++;
      } else {
        clearInterval(intervalId); // Stop once the full text is displayed
      }
    }, delay);
  }

  // Function to close the side window
  closeSideWindow() {
    const sideWindow = document.querySelector('.side-window') as HTMLElement;
    if (sideWindow) {
      sideWindow.style.display = 'none';
    }
  }
  
}