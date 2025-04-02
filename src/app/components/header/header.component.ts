import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgForOf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navItems = [
    {title: 'Inicio', link: '#'},
    {title: 'Sobre mi', link: '#about'},
    {title: 'Habilidades', link: '#skills'},
    {title: 'Proyectos', link: '#projects'},
    {title: 'Contacto', link: '#contact'},
  ];
}
