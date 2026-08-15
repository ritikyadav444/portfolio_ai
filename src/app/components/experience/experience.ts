import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme';
import { ScrollRevealDirective } from '../../directives/scroll-reveal';

interface Job {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

@Component({
  selector: 'app-experience',
  imports: [ScrollRevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  isDark = inject(ThemeService).isDark;

  jobs: Job[] = [
    {
      company: 'GMoney Pvt. Ltd.',
      role: 'Associate Software Developer (MEAN)',
      period: 'Aug 2024 – Present',
      bullets: [
        'Built a full-stack insurance <strong class="t-strong">Claim-Desk platform</strong> (Angular, Node.js, Express, MongoDB) enabling hospitals and doctors to upload policies, decode coverage, and run claim validation and approval workflows end-to-end.',
        'Secured RESTful APIs with <strong class="t-strong">JWT-based authentication and RBAC</strong>, and documented endpoints with Swagger/OpenAPI for cross-team integration.',
        'Automated policy decoding and eligibility checks, cutting manual claim-verification time by <em class="t-em">~40%</em> and reducing claim-processing errors by <em class="t-em">~25%</em>.',
        'Introduced <strong class="t-strong">Redis caching</strong> on high-traffic claim-status endpoints, reducing average API response time by <em class="t-em">~35%</em>.',
        'Built real-time claim-tracking dashboards using <strong class="t-strong">Socket.io</strong> and a Daily Tracker platform — live for <em class="t-em">50+ hospital partners</em>.',
        'Built an internal <strong class="t-strong">IT Task Allocation & Tracking System</strong> with automated reminders and escalation workflows, cutting average IT ticket response time by <em class="t-em">~30%</em>.',
        'Built a <strong class="t-strong">Claim Tracker</strong> integrating third-party insurance webhooks for automated status sync, shortening claim turnaround time by <em class="t-em">~30%</em>.',
        'Debugged and resolved production defects using application logs and monitoring tools, drove <strong class="t-strong">root-cause analysis (RCA)</strong> on recurring issues.',
      ],
    },
    {
      company: 'AARV Logistics',
      role: 'Web Developer',
      period: 'Jan 2023 – Mar 2023',
      bullets: [
        'Designed and built a <strong class="t-strong">responsive company website</strong> for Aarav Logistics, including service pages, contact forms, and a UI focused on lead generation.',
        'Optimized the site for mobile devices, improving <strong class="t-strong">accessibility and engagement</strong> for prospective clients.',
      ],
    },
  ];
}
