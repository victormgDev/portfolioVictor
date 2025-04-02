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
    {id: 1, name: 'HTML', icon: 'assets/HTML.png' },
    {id: 2,name: 'CSS', icon: 'assets/css3.png' },
    {id: 3,name: 'JavaScript', icon: 'assets/JS.png' },
    {id: 4,name: 'PHP', icon: 'assets/php1.png' },
    {id: 5,name: 'C#', icon: 'assets/cesar.png' },
    {id: 6,name: 'SQL', icon: 'assets/mySql.png' },
    {id: 7,name: 'MongoDb', icon: 'assets/MongoDb.png' },
  ]

  frameworks =[
    {id: 1,name:'Bootstrap', icon: 'assets/Bootstrap.png'},
    {id: 2,name: 'Angular', icon: 'assets/Angular.png'},
    {id: 3,name: 'Asp.Net', icon: 'assets/AspNet.png'},
  ]
  ides = [
    {id: 1,name: 'phpStorm', icon: 'assets/PhpStorm.png'},
    {id: 2,name: 'Rider', icon: 'assets/Rider.png'},
    {id: 3,name: 'WebStorm', icon: 'assets/WebStorm.png'},
  ]
}
