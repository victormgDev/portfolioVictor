import {Component, Inject} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {ContactComponent} from './components/contact/contact.component';
import {FooterComponent} from './components/footer/footer.component';
import {Meta, Title} from '@angular/platform-browser';
import {filter, map, mergeMap} from 'rxjs';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AboutMeComponent, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit() {
    const sections = this.document.querySelectorAll('main > *[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const title = el.getAttribute('data-title');
            const description = el.getAttribute('data-description');
            const keywords = el.getAttribute('data-keywords');

            if (title) {
              this.titleService.setTitle(title);
            }
            if (description) {
              this.metaService.updateTag({name: 'description', content: description});
            }
            if (keywords) {
              this.metaService.updateTag({name: 'keywords', content: keywords});
            }
          }
        });
      },
      {threshold: 0.5} // ajusta si necesitas más sensibilidad
    );

    sections.forEach(section => observer.observe(section));
  }
  }
