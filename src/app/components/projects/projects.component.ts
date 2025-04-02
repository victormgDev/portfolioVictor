import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-commerce Website',
      description: 'Tienda online con carrito de compras, registro de usuarios y panel de administración.',
      image: 'assets/img/projects/ecommerce.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      link: '#'
    },
    {
      title: 'Blog Personal',
      description: 'Blog con sistema de gestión de contenido personalizado para artículos y categorías.',
      image: 'assets/img/projects/blog.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      link: '#'
    },
    {
      title: 'App de Notas',
      description: 'Aplicación para gestionar notas personales con funcionalidades de crear, editar y eliminar.',
      image: 'assets/img/projects/notes.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      link: '#'
    }
  ]
}
