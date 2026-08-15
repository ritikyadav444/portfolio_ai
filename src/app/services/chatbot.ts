import { Injectable } from '@angular/core';

export interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

interface KnowledgeEntry {
  keywords: string[];
  response: string;
}

@Injectable({ providedIn: 'root' })
export class ChatbotService {
  private knowledge: KnowledgeEntry[] = [
    {
      keywords: ['who', 'about', 'introduce', 'tell me about', 'ritik', 'yourself', 'summary', 'overview', 'profile'],
      response: "Ritik Yadav is a Full-stack Software Developer with 1+ year of experience building scalable Node.js/Express backend services, secure REST APIs, and React/Angular frontends for healthcare fintech platforms. He's experienced with JWT/RBAC authentication, real-time features (Socket.io), Redis caching, and Agile, Git-based delivery. Currently based in Mumbai."
    },
    {
      keywords: ['experience', 'work', 'job', 'company', 'career', 'where does he work', 'current role', 'employment'],
      response: "Ritik currently works at GMoney Pvt. Ltd. as an Associate Software Developer (MEAN Stack) since August 2024. He builds full-stack insurance platforms, real-time dashboards, and internal tools for 50+ hospital partners. Before that, he worked at AARV Logistics (Jan-Mar 2023) building their responsive company website."
    },
    {
      keywords: ['gmoney', 'claim', 'insurance', 'hospital', 'healthcare'],
      response: "At GMoney Pvt. Ltd., Ritik built a full-stack insurance Claim-Desk platform using Angular, Node.js, Express, and MongoDB. He automated policy decoding (~40% faster verification), introduced Redis caching (~35% faster API responses), built real-time dashboards with Socket.io for 50+ hospital partners, and created a Claim Tracker with webhook integrations that shortened turnaround time by ~30%."
    },
    {
      keywords: ['project', 'built', 'portfolio project', 'side project', 'personal project'],
      response: "Ritik has two notable projects: 1) Agency Kinetics — a full-stack Agency Management System (React, Node.js, Express.js, MongoDB) with CRUD modules, JWT/RBAC auth, and automated workflows for lead tracking, invoicing, and payments. 2) AGI App — a Flutter mobile app for students to view academic info, with a React admin dashboard connected to Firebase for real-time content management."
    },
    {
      keywords: ['agency kinetics', 'agency', 'management system'],
      response: "Agency Kinetics is a full-stack Agency Management System built with React, Node.js, Express.js, and MongoDB. It features CRUD modules for clients, tasks, teams, and invoices, JWT-based authentication with RBAC, automated workflows for lead tracking, task management, invoicing, and payments, and optimized MongoDB schema design that improved query performance by ~30%."
    },
    {
      keywords: ['agi', 'atharva', 'flutter', 'mobile app', 'student app'],
      response: "The AGI App (Atharva Group of Institutions Application) is a Flutter mobile app that lets students view results, notices, timetables, and faculty details. Ritik also built a React admin dashboard connected to Firebase for managing academic content, pushing real-time updates, and controlling user access and permissions."
    },
    {
      keywords: ['skill', 'tech', 'technology', 'stack', 'what can', 'proficient', 'know', 'language', 'programming'],
      response: "Ritik's tech stack includes: Languages — JavaScript (ES6+), TypeScript, Node.js, SQL, HTML5, CSS3. Frameworks — React.js, Angular, Express.js, NestJS, Redux, Flutter, Tailwind CSS, Bootstrap, Material UI. APIs — REST, WebSockets, Socket.io, Swagger. Security — JWT, OAuth, RBAC. Databases — MongoDB, MySQL, PostgreSQL, Firebase, Redis. Tools — Docker, Git, AWS, Figma."
    },
    {
      keywords: ['react', 'reactjs'],
      response: "Ritik has used React in: 1) Agency Kinetics — full-stack management system with React frontend. 2) AGI App — React admin dashboard for managing academic content with Firebase. He's also proficient in Redux for state management."
    },
    {
      keywords: ['angular'],
      response: "Ritik uses Angular professionally at GMoney Pvt. Ltd., where he built the full-stack insurance Claim-Desk platform with Angular on the frontend. He works with the complete MEAN stack (MongoDB, Express, Angular, Node.js) daily."
    },
    {
      keywords: ['node', 'express', 'backend', 'server', 'api'],
      response: "Ritik builds backends with Node.js and Express.js. At GMoney, he secured RESTful APIs with JWT/RBAC, implemented Redis caching, built webhook integrations, and used Socket.io for real-time features. In Agency Kinetics, he built the entire backend with Express.js and documented APIs with Swagger/OpenAPI."
    },
    {
      keywords: ['mongodb', 'database', 'mysql', 'postgresql', 'firebase', 'redis', 'db'],
      response: "Ritik works with multiple databases: MongoDB (primary at GMoney and Agency Kinetics — schema design, indexing, query optimization), Redis (caching at GMoney, ~35% faster API response), Firebase (AGI App real-time data), and has skills in MySQL and PostgreSQL."
    },
    {
      keywords: ['redis', 'caching', 'cache', 'performance'],
      response: "Ritik introduced Redis caching on high-traffic claim-status endpoints at GMoney, reducing average API response time by ~35%. He's experienced with caching strategies for performance optimization."
    },
    {
      keywords: ['socket', 'real-time', 'realtime', 'websocket', 'live'],
      response: "Ritik built real-time claim-tracking dashboards using Socket.io at GMoney. These dashboards track RM activity, hospital onboarding, and GMoney card approvals — live for 50+ hospital partners."
    },
    {
      keywords: ['jwt', 'auth', 'security', 'oauth', 'rbac', 'authentication', 'authorization'],
      response: "Ritik is experienced in security: JWT-based authentication, OAuth, Role-Based Access Control (RBAC), and input validation & sanitization. He implemented JWT/RBAC at both GMoney (API security) and Agency Kinetics (access control)."
    },
    {
      keywords: ['education', 'college', 'university', 'degree', 'cgpa', 'gpa', 'study', 'academic'],
      response: "Ritik holds a Bachelor of Engineering in Information Technology from the University of Mumbai (2020-2024) with a CGPA of 9.06 / 10."
    },
    {
      keywords: ['leadership', 'lead', 'chairperson', 'community', 'csi', 'gdsc', 'club', 'organize'],
      response: "Ritik has held two leadership roles: 1) Chairperson, CSI ACE — led a 30+ member student technical community and organized 10+ workshops/events. 2) Web Lead, GDSC ACE — managed the chapter website and event/registration pages for 500+ student members."
    },
    {
      keywords: ['docker', 'devops', 'aws', 'cloud', 'deploy'],
      response: "Ritik has experience with Docker for containerization, AWS for cloud services, and Git/GitHub for version control. He follows Agile methodologies with Git-based workflows and code reviews."
    },
    {
      keywords: ['contact', 'email', 'phone', 'reach', 'hire', 'connect', 'location', 'mumbai'],
      response: "You can reach Ritik at: Email — ritikyadav6397@gmail.com, Phone — 8291563516. He's based in Mumbai, India. Feel free to connect with him on LinkedIn or GitHub!"
    },
    {
      keywords: ['webhook', 'integration', 'third-party', 'external'],
      response: "At GMoney, Ritik built a Claim Tracker integrating third-party insurance webhooks for automated status sync, with secure document versioning and completeness checks — shortening claim turnaround time by ~30%."
    },
    {
      keywords: ['swagger', 'openapi', 'documentation', 'postman', 'testing'],
      response: "Ritik documents APIs with Swagger/OpenAPI and tests them with Postman and Supertest. At GMoney, he documented all RESTful APIs for cross-team integration. In Agency Kinetics, he tested and documented REST APIs with Postman and Swagger."
    },
    {
      keywords: ['agile', 'scrum', 'sprint', 'workflow', 'git', 'code review'],
      response: "Ritik follows Agile methodologies with Git-based workflows, including code reviews in sprints. He debugs production defects using application logs and monitoring tools, and drives root-cause analysis (RCA) on recurring issues."
    },
    {
      keywords: ['tailwind', 'css', 'bootstrap', 'material', 'ui', 'frontend', 'design', 'figma'],
      response: "For frontend styling, Ritik is proficient in Tailwind CSS, Bootstrap, Material UI, Semantic UI, and jQuery. He also uses Figma for design work and Storybook for component development."
    },
    {
      keywords: ['nestjs', 'nest'],
      response: "Ritik has NestJS in his skill set among his frameworks and libraries. His primary backend work has been with Express.js and Node.js."
    },
    {
      keywords: ['aarv', 'logistics', 'aarav'],
      response: "At AARV Logistics (Jan-Mar 2023), Ritik designed and built a responsive company website including service pages, contact forms, and a UI focused on lead generation. He also optimized the site for mobile devices."
    },
    {
      keywords: ['hello', 'hi', 'hey', 'greetings', 'sup', 'good morning', 'good evening'],
      response: "Hello! I'm Ritik's portfolio assistant. Ask me anything about his experience, skills, projects, or background. For example: 'What projects has he built?' or 'Where has he used React?'"
    },
    {
      keywords: ['thank', 'thanks', 'bye', 'goodbye', 'see you', 'great'],
      response: "You're welcome! Feel free to reach out to Ritik directly at ritikyadav6397@gmail.com if you'd like to discuss opportunities. Have a great day!"
    },
    {
      keywords: ['strength', 'best at', 'strongest', 'highlight', 'achievement'],
      response: "Key highlights: Cut manual claim-verification time by ~40%, reduced API response time by ~35% with Redis caching, built real-time dashboards for 50+ hospital partners, graduated with 9.06/10 CGPA, and led a 30+ member tech community as CSI Chairperson."
    },
  ];

  getResponse(input: string): string {
    const lower = input.toLowerCase().trim();
    let bestMatch: KnowledgeEntry | null = null;
    let bestScore = 0;

    for (const item of this.knowledge) {
      let score = 0;
      for (const kw of item.keywords) {
        if (lower.includes(kw)) {
          score += kw.split(' ').length;
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch && bestScore > 0) {
      return bestMatch.response;
    }

    return "I'm not sure about that specific detail. Try asking about Ritik's experience, skills, projects, education, or leadership roles!";
  }

  getSuggestedQuestions(): string[] {
    return [
      'What does Ritik do?',
      'Tell me about his projects',
      'Where has he used React?',
    ];
  }
}
