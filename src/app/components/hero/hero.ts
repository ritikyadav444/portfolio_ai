import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {
  typewriterText = signal('');

  private texts = [
    'Full-Stack Developer',
    'MEAN Stack Developer',
    'React & Angular Developer',
    'Backend Engineer',
    'Healthcare Fintech Builder',
  ];
  private textIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId: any;

  ngOnInit() {
    this.typewrite();
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }

  private typewrite() {
    const current = this.texts[this.textIndex];
    if (this.isDeleting) {
      this.charIndex--;
    } else {
      this.charIndex++;
    }
    this.typewriterText.set(current.substring(0, this.charIndex));

    let delay = this.isDeleting ? 40 : 80;
    if (!this.isDeleting && this.charIndex === current.length) {
      delay = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      delay = 500;
    }
    this.timeoutId = setTimeout(() => this.typewrite(), delay);
  }

  scrollTo(e: Event, target: string) {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
