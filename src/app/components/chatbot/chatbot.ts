import { Component, signal, inject, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ChatbotService, ChatMessage } from '../../services/chatbot';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
})
export class Chatbot implements AfterViewChecked {
  private chatbotService = inject(ChatbotService);

  isOpen = signal(false);
  isTyping = signal(false);
  inputText = signal('');
  messages = signal<ChatMessage[]>([
    { text: "Hi! I'm Ritik's portfolio assistant. Ask me about his experience, skills, projects, or anything from his resume!", sender: 'bot' },
  ]);
  suggestedQuestions = this.chatbotService.getSuggestedQuestions();
  showSuggestions = signal(true);

  @ViewChild('messagesContainer') messagesContainer!: ElementRef<HTMLDivElement>;
  private shouldScroll = false;

  ngAfterViewChecked() {
    if (this.shouldScroll && this.messagesContainer) {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      this.shouldScroll = false;
    }
  }

  toggleChat() {
    this.isOpen.update(v => !v);
  }

  closeChat() {
    this.isOpen.set(false);
  }

  askSuggested(question: string) {
    this.showSuggestions.set(false);
    this.sendMessage(question);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const msg = this.inputText().trim();
    if (!msg) return;
    this.sendMessage(msg);
    this.inputText.set('');
  }

  updateInput(event: Event) {
    this.inputText.set((event.target as HTMLInputElement).value);
  }

  private sendMessage(text: string) {
    this.messages.update(msgs => [...msgs, { text, sender: 'user' }]);
    this.isTyping.set(true);
    this.shouldScroll = true;

    setTimeout(() => {
      const response = this.chatbotService.getResponse(text);
      this.isTyping.set(false);
      this.messages.update(msgs => [...msgs, { text: response, sender: 'bot' }]);
      this.shouldScroll = true;
    }, 600 + Math.random() * 600);
  }
}
