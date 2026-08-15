import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal';
import { TiltDirective } from '../../directives/tilt';

interface Project {
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  tags: { name: string; color: string }[];
  icon: string;
  iconBg: string;
}

@Component({
  selector: 'app-projects',
  imports: [ScrollRevealDirective, TiltDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Agency Kinetics',
      description: 'Full-stack Agency Management System with CRUD modules for clients, tasks, teams, and invoices. Includes JWT-based auth, RBAC, and automated workflows for lead tracking, task management, invoicing, and payments.',
      highlights: [
        'Tested & documented APIs with Postman and Swagger/OpenAPI',
        'Optimized MongoDB schema design, improving query performance by ~30%',
      ],
      tags: [
        { name: 'React', color: 'violet' },
        { name: 'Node.js', color: 'cyan' },
        { name: 'Express.js', color: 'green' },
        { name: 'MongoDB', color: 'yellow' },
        { name: 'JWT/RBAC', color: 'red' },
      ],
      icon: 'briefcase',
      iconBg: 'bg-violet-500/10',
    },
    {
      title: 'AGI App',
      subtitle: 'Atharva Group of Institutions Application',
      description: 'Flutter mobile app enabling students to view results, notices, timetables, and faculty details. Includes a React admin dashboard connected to Firebase for managing academic content with real-time updates.',
      highlights: [
        'Real-time push updates via Firebase',
        'User access and permissions management',
      ],
      tags: [
        { name: 'Flutter', color: 'blue' },
        { name: 'React', color: 'violet' },
        { name: 'Firebase', color: 'orange' },
        { name: 'Dart', color: 'green' },
      ],
      icon: 'smartphone',
      iconBg: 'bg-cyan-500/10',
    },
  ];

  getTagClasses(color: string): string {
    const map: Record<string, string> = {
      violet: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
      cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      green: 'bg-green-500/10 text-green-300 border-green-500/20',
      yellow: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
      red: 'bg-red-500/10 text-red-300 border-red-500/20',
      blue: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
      orange: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
    };
    return map[color] || map['violet'];
  }
}
