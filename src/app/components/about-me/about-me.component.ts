import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  imports: [

  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  personalInfo: { name: string; nacimiento: string; movil: string; email: string; web: string; localizacion: string; descripcion: SafeHtml };

  constructor(private sanitizer: DomSanitizer) {
    this.personalInfo = {
      name: 'Victor Montes Garrido',
      nacimiento: '22 de Septiembre de 1994',
      movil: '678962767',
      email: 'admin@victormontesgarrido.com',
      web: 'victormontesgarrido.com',
      localizacion: 'Membrilla, Ciudad Real',
      descripcion: this.sanitizer.bypassSecurityTrustHtml(`
        Hola a tod@s, soy <span style="color:#0DCAF0FF">Victor Montes Garrido</span> , un apasionado del desarrollo de aplicaciones
        web con formación académica de ciclo formativo de grado superior en desarrollo de aplicaciones
        web. Durante mis estudios, he adquirido sólidos conocimientos en diversas tecnologías y
        lenguajes de programación, incluyendo HTML5, CSS3, Sass, JavaScript, MySQL y frameworks como Bootstrap5.
        Mi experiencia en el desarrollo web se complementa con habilidades en diseño de bases de datos y gestión de proyectos.<br><br>

        Actualmente estoy realizando las prácticas de finalización del ciclo formativo, donde estoy aplicando
        mis conocimientos en un entorno real y sobre todo adquiriendo experiencia laboral en el sector. <br><br>

        Mi enfoque se centra en crear soluciones web eficientes, intuitivas y con un diseño atractivo que mejora
        la experiencia del usuario. Estoy siempre en búsqueda activa de nuevas oportunidades laborales para crecer profesionalmente
        y contribuir con mis habilidades en proyectos innovadores.
      `)
    };
  }
}
