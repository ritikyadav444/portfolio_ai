import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal';

interface SkillGroup {
  title: string;
  icon: string;
  color: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  imports: [ScrollRevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  groups: SkillGroup[] = [
    { title: 'Languages', icon: 'code', color: 'violet', items: ['JavaScript (ES6+)', 'TypeScript', 'Node.js', 'SQL', 'HTML5', 'CSS3'] },
    { title: 'Frameworks', icon: 'layers', color: 'cyan', items: ['React.js', 'Angular', 'Express.js', 'NestJS', 'Redux', 'Flutter', 'Bootstrap', 'Tailwind CSS', 'Material UI', 'jQuery', 'Storybook'] },
    { title: 'APIs & Real-Time', icon: 'zap', color: 'green', items: ['REST APIs', 'Webhooks', 'Socket.io', 'WebSockets', 'Swagger / OpenAPI', 'Postman', 'Supertest'] },
    { title: 'Security', icon: 'shield', color: 'red', items: ['JWT', 'OAuth', 'RBAC', 'Input Validation & Sanitization'] },
    { title: 'Databases', icon: 'database', color: 'yellow', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Redis'] },
    { title: 'Tools', icon: 'wrench', color: 'purple', items: ['Docker', 'Git', 'GitHub', 'AWS', 'Postman', 'VS Code', 'Figma', 'Arduino'] },
  ];
}
