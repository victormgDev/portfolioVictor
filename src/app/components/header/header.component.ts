import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {TypewriterComponent} from '../typewriter/typewriter.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    NgForOf,
    TypewriterComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navItems = [
    {title: 'Inicio', link: '#'},
    {title: 'Sobre mí', link: '#about'},
    {title: 'Habilidades', link: '#skills'},
    {title: 'Proyectos', link: '#projects'},
    {title: 'Contacto', link: '#contact'},
  ];

  constructor(private router: Router) {
  }

}
