import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  infoFooter: {name: string; email: string; web: string; localizacion: string; copyright: string;};
constructor(private sanitizer: DomSanitizer) {
  this.infoFooter = {
    name: 'Víctor',
    email: 'admin@victormontesgarrido.com',
    web: 'www.victormontesgarrido.com',
    localizacion: 'Ciudad Real, España',
    copyright: '© 2025 Víctor Montes Garrido. Todos los derechos reservados'

  }
}
}
