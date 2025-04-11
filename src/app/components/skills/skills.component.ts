import { Component } from '@angular/core';
import {LowerCasePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [
    NgForOf,
    LowerCasePipe
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  lenguajesProgramacion= [
    {id: 1, name: 'HTML', icon: 'assets/HTML.png', alt: 'Icono HTML' },
    {id: 2,name: 'CSS', icon: 'assets/css3.png', alt: 'Icono CSS3' },
    {id: 3,name: 'JavaScript', icon: 'assets/JS.png', alt: 'Icono HTML' },
    {id: 4,name: 'PHP', icon: 'assets/php1.png', alt: 'Icono PHP' },
    {id: 5,name: 'C#', icon: 'assets/cesar.png', alt: 'Icono Cesar' },
    {id: 6,name: 'SQL', icon: 'assets/mySql.png', alt: 'Icono SQL' },
    {id: 7,name: 'MongoDb', icon: 'assets/MongoDb.png', alt: 'Icono MongoDb' },
    {id: 8, name: 'TypeScript', icon: 'assets/Typescript.png', alt: 'Icono TypeScript' },
  ]

  frameworks =[
    {id: 1,name:'Bootstrap', icon: 'assets/Bootstrap.png', alt: 'Icono Bootstrap' },
    {id: 2,name: 'Angular', icon: 'assets/Angular.png', alt: 'Icono Angular'},
    {id: 3,name: 'Asp.Net', icon: 'assets/AspNet.png', alt: 'Icono .NET'},
  ]
  ides = [
    {id: 1,name: 'phpStorm', icon: 'assets/PhpStorm.png', alt: 'Icono PHPStorm' },
    {id: 2,name: 'Rider', icon: 'assets/Rider.png', alt: 'Icono Rider'},
    {id: 3,name: 'WebStorm', icon: 'assets/WebStorm.png', alt: 'Icono WebStorm'},
  ]
}
