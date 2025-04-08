import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  proyectos = [
    {
      nombre: 'Mi Portfolio',
      descripcion: 'Porfolio personal creado con Angular',
      tecnologias: [
        'Angular',
        'Bootstrap',
        'HTML5',
        'TypeScript',
        'CSS3'
      ],
      imagen: 'assets/portfolio.png',
      gitHub: 'https://github.com/victormgDev/portfolioVictor',
      verProyecto: 'www.victormontesgarrido.com'
    },
    {
      nombre: 'Api de Contacto',
      descripcion: 'API REST en C# para enviar emails desde el formulario de contacto',
      tecnologias: [
        '.NET',
        'C#',
        'Docker',
        'HTML5',
        'CSS3',
        'Railway'
      ],
      imagen: 'assets/formContact.png',
      gitHub: 'https://github.com/victormgDev/PorfolioApi',
      verProyecto: ''
    },
    {
      nombre: 'Todo Sobre Aviones',
      descripcion: 'Proyecto final DAW, aplicacion para rastrear vuelos en tiempo real ' +
        'y una enciclopedia de aviones',
      tecnologias: [
        'PHP',
        'JavaScript',
        'Bootstrap',
        'HTML5',
        'CSS3',
        'MySQL'
      ],
      imagen: 'assets/appTsa.png',
      gitHub: 'https://github.com/victormgDev/ProyectoFinalDaw_TSA',
      verProyecto: ''
    }

  ]
}
