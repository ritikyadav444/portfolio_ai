import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-leadership',
  imports: [ScrollRevealDirective],
  templateUrl: './leadership.html',
  styleUrl: './leadership.css',
})
export class Leadership {
  roles = [
    {
      title: 'Chairperson',
      org: 'CSI ACE (Computer Society of India)',
      orgColor: 'text-violet-400',
      iconBg: 'bg-violet-500/10',
      iconColor: 'text-violet-400',
      description: 'Led a <strong class="t-strong">30+ member</strong> student technical community and organized <strong class="t-strong">10+ workshops and events</strong>, fostering technical skill development and community engagement.',
    },
    {
      title: 'Web Lead',
      org: 'GDSC ACE (Google Developer Student Clubs)',
      orgColor: 'text-cyan-400',
      iconBg: 'bg-cyan-500/10',
      iconColor: 'text-cyan-400',
      description: 'Managed the chapter website and event/registration pages for <strong class="t-strong">500+ student members</strong>, ensuring seamless digital experiences for community events.',
    },
  ];
}
