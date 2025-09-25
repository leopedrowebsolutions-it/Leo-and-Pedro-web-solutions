import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraDeNavegacion } from "./barra-de-navegacion/barra-de-navegacion";

import { FooterPageComponent } from './footer-page/footer-page.component';

import { Equipo } from "./equipo/equipo";
import { SobreNosotros } from "./sobre-nosotros/sobre-nosotros";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarraDeNavegacion, FooterPageComponent, Equipo, SobreNosotros],

  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
