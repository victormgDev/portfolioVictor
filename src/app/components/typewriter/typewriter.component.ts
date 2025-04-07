import { Component } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  imports: [],
  templateUrl: './typewriter.component.html',
  styleUrl: './typewriter.component.css'
})
export class TypewriterComponent {
  displayText1: string = "";
  fulltext: string = "VICTOR MONTES";
  index: number = 0;
  speed: number = 150;

  ngOnInit() {
    this.escribirtexto();
  }
  escribirtexto() {
    if (this.index < this.fulltext.length) {
      this.displayText1 += this.fulltext.charAt(this.index);
      this.index++;
      setTimeout(() => this.escribirtexto(), this.speed);
    }
  }

}
