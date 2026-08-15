import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[appTilt]' })
export class TiltDirective {
  constructor(private el: ElementRef<HTMLElement>) {
    this.el.nativeElement.style.transition = 'transform 0.15s ease';
    this.el.nativeElement.style.transformStyle = 'preserve-3d';
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    this.el.nativeElement.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  }
}
