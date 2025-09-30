import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar esto

@Component({
  selector: 'app-servicios',
  imports: [CommonModule], // Agregar CommonModule aquí
  templateUrl: './servicios.html',
  styleUrl: './servicios.css'
})
export class Servicios {

  isOpen = false;
  isOpen2 = false;
  isOpen3 = false;
  isOpen4 = false;

  openPopup(valor: number) {
    switch(valor){
    case 1:
      this.isOpen = true;
      break;
    case 2:
      this.isOpen2 = true;
      break;
    case 3:
      this.isOpen3 = true;
      break;
    case 4:
      this.isOpen4 = true;
      break;
    }
  }

  closePopup() {
    this.isOpen = false;
    this.isOpen2 = false;
    this.isOpen3 = false;
    this.isOpen4 = false;
  }
}
