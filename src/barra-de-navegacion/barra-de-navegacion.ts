import { Component } from '@angular/core';
import { BootonContactanosComponent } from "../booton-contactanos/booton-contactanos.component";

@Component({
  selector: 'app-barra-de-navegacion',
  imports: [BootonContactanosComponent],
  templateUrl: './barra-de-navegacion.html',
  styleUrl: './barra-de-navegacion.css'
})
export class BarraDeNavegacion {
  mover(seccion: string): void {
    const el = document.getElementById(seccion);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' , block: "start" });
            
    }
  }
}
