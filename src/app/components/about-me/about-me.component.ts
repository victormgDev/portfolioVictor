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
      web: 'www.victormontesgarrido.com',
      localizacion: 'Membrilla, Ciudad Real, 13230',
      descripcion: this.sanitizer.bypassSecurityTrustHtml(`
        Hola a tod@s, soy <span style="color:#0DCAF0FF">Victor Montes Garrido</span>, un apasionado del desarrollo de aplicaciones web con
        formación académica en el ciclo formativo de grado superior en desarrollo de aplicaciones web. Durante mis estudios,
        he adquirido sólidos conocimientos en diversas tecnologías y lenguajes de programación, incluyendo HTML5, CSS3, Sass,
        JavaScript, TypeScript, PHP, C#, MySQL, Bootstrap 5, Angular y .NET.<br><br>

        Mi experiencia en el desarrollo web se complementa con habilidades en diseño de bases de datos, gestión de proyectos
        y la creación de APIs con .NET y MongoDB, lo que me permite desarrollar aplicaciones escalables y eficientes.<br><br>

        Actualmente, estoy desarrollando mi portafolio utilizando Angular y .NET, mejorando mis habilidades en desarrollo
        frontend y backend mientras optimizo la experiencia del usuario con interfaces dinámicas y atractivas. <br><br>

        Mi enfoque se centra en crear soluciones web eficientes, intuitivas y con un diseño atractivo que mejora
        la experiencia del usuario. Estoy siempre en búsqueda activa de nuevas oportunidades laborales para crecer profesionalmente
        y contribuir con mis habilidades en proyectos innovadores.
      `)
    };
  }
}
