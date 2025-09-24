import { Component } from '@angular/core';

@Component({
  selector: 'app-booton-contactanos',
  imports: [],
  templateUrl: './booton-contactanos.component.html',
  styleUrl: './booton-contactanos.component.css'
})
export class BootonContactanosComponent {
  contactar() {
  const destinatario = "leopedrowebsolutions@gmail.com";
  const subject = encodeURIComponent("Solicitud de presupuesto");
  const body = encodeURIComponent("Hola, quiero más información sobre un proyecto de software. ¿Podrían enviarme un presupuesto?");
  
  window.location.href = `mailto:${destinatario}?subject=${subject}&body=${body}`;
}

}
