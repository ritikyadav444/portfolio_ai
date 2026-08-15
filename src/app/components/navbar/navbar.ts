import { Component, HostListener, signal, inject } from '@angular/core';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private theme = inject(ThemeService);
  isDark = this.theme.isDark;
  mobileMenuOpen = signal(false);
  scrolled = signal(false);

  navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Leadership', href: '#leadership' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 50);
  }

  toggleTheme() {
    this.theme.toggle();
  }

  toggleMobile() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobile() {
    this.mobileMenuOpen.set(false);
  }

  scrollTo(e: Event, target: string) {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.closeMobile();
  }
}
