import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraDeNavegacion } from "./barra-de-navegacion/barra-de-navegacion";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarraDeNavegacion],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  
}
