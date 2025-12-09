import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-servicios',
  templateUrl: './servicios.html',
  styleUrls: ['./servicios.css']
})
export class Servicios {

  isOpen = false;
  isOpen2 = false;
  isOpen3 = false;
  isOpen4 = false;

  openPopup(valor: number) {
    switch (valor) {
      case 1: this.isOpen = true; break;
      case 2: this.isOpen2 = true; break;
      case 3: this.isOpen3 = true; break;
      case 4: this.isOpen4 = true; break;
    }
  }

  closePopup() {
    this.isOpen = false;
    this.isOpen2 = false;
    this.isOpen3 = false;
    this.isOpen4 = false;
  }
}
