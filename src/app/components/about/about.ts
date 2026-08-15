import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-about',
  imports: [ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '9.06', label: 'CGPA / 10' },
    { value: '50+', label: 'Hospital Partners' },
  ];
}
