import { Component } from '@angular/core';
import { BootonContactanosComponent } from "../booton-contactanos/booton-contactanos.component";

@Component({
  selector: 'app-sobre-nosotros',
  imports: [BootonContactanosComponent],
  templateUrl: './sobre-nosotros.html',
  styleUrl: './sobre-nosotros.css'
})
export class SobreNosotros {
  mover(seccion: string): void {
    const el = document.getElementById(seccion);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' , block: "start" });
            
    }
  }
}
