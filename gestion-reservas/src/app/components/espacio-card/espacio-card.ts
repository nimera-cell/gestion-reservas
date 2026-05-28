import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Espacio } from '../../models/espacio.model';

@Component({
  selector: 'app-espacio-card',
  standalone: false,
  templateUrl: './espacio-card.html',
  styleUrls: ['./espacio-card.css']
})
export class EspacioCardComponent {

  // Recibe información desde el componente padre
  @Input() espacio!: Espacio;

  // Envía información hacia el componente padre
  @Output() espacioSeleccionado = new EventEmitter<Espacio>();

  // Método para emitir el espacio seleccionado
  seleccionar() {
    this.espacioSeleccionado.emit(this.espacio);
  }

}