import { Component } from '@angular/core';

import { ReservaFormComponent } from './components/reserva-form/reserva-form.component';
import { ResumenReserva } from './components/resumen-reserva/resumen-reserva';
import { ListaEspacios } from './components/lista-espacios/lista-espacios';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListaEspacios,
    ReservaFormComponent,
    ResumenReserva
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}