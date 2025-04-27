import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  imports: [
    NgForOf,
    NgIf

  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  personalInfo: { name: string; nacimiento: string; curriculum: string; email: string; web: string; localizacion: string; descripcion: SafeHtml };
  experiencia: { duracion: string; puesto:string; empresa:string; conocimientos: string [] }[];
  formacion: {titulo: string; duracionFormacion: string; empresaFormacion: string; certificacion:string; url:string;}[];
  constructor(private sanitizer: DomSanitizer) {
    this.personalInfo = {
      name: 'Victor Montes Garrido',
      nacimiento: '22 de Septiembre de 1994',
      curriculum: 'assets/CV-Victor.pdf',
      email: 'admin@victormontesgarrido.com',
      web: 'www.victormontesgarrido.com',
      localizacion: 'Ciudad Real, España',
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
    this.experiencia = [
      {
        duracion: 'Enero 2025 - Abril 2025',
        puesto: 'Estudiante en prácticas',
        empresa: 'Dimax Soluciones Integrales',
        conocimientos: [
          'HTML',
          'CSS',
          'Wordpress',
          'Odoo',
        ]
      }
    ]
    this.formacion = [
      {
        titulo: 'Ciclo formativo Grado Superior DAW',
        duracionFormacion: 'Septiembre 2023 - Abril 2025',
        empresaFormacion: 'Ilerna',
        certificacion: '',
        url: ''
      },
      {
        titulo: 'Angular 19',
        duracionFormacion: 'Enero 2025 - Marzo 2025',
        empresaFormacion: 'Udemy',
        certificacion: 'UC-eae4929c-a358-444d-9ae2-e57094ec3d2b',
        url: 'https://www.udemy.com/certificate/UC-eae4929c-a358-444d-9ae2-e57094ec3d2b/'
      },
      {
        titulo: 'API REST .NET',
        duracionFormacion: 'Enero 2025 - Marzo 2025',
        empresaFormacion: 'Udemy',
        certificacion: 'UC-c8a2e80d-1a74-4c8b-b959-83f88f74aaf2',
        url: 'https://www.udemy.com/certificate/UC-c8a2e80d-1a74-4c8b-b959-83f88f74aaf2/'
      },
      {
        titulo: 'Docker',
        duracionFormacion: 'Marzo 2025 - Actualidad',
        empresaFormacion: 'Udemy',
        certificacion: '',
        url: ''
      }
    ]
  }
}
