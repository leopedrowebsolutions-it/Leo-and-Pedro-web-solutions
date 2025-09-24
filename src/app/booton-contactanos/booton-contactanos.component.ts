import { Component } from '@angular/core';

@Component({
  selector: 'app-booton-contactanos',
  templateUrl: './booton-contactanos.component.html',
  styleUrls: ['./booton-contactanos.component.css']
})
export class BootonContactanosComponent {
contactar() {
  const destinatario = "leopedrowebsolutions@gmail.com";
  const subject = encodeURIComponent("Solicitud de presupuesto");
  const body = encodeURIComponent("Hola, quiero más información sobre un proyecto de software. ¿Podrían enviarme un presupuesto?");

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${subject}&body=${body}` ;
  window.open(gmailUrl, "_blank");
}
}
