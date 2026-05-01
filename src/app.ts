import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraDeNavegacion } from "./barra-de-navegacion/barra-de-navegacion";

import { FooterPageComponent } from './footer-page/footer-page.component';


import { SobreNosotros } from "./sobre-nosotros/sobre-nosotros";
import { Servicios } from "./servicios/servicios";
import { Soluciones } from "./soluciones/soluciones";
import { Proyectos } from './proyectos/proyectos';
import { Nosotros } from './nosotros/nosotros';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarraDeNavegacion, FooterPageComponent, SobreNosotros, Servicios, Soluciones, Proyectos, Nosotros],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
