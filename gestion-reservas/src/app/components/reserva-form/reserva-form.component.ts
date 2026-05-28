import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReservaService } from '../../services/reserva-service';

@Component({
  selector: 'app-reserva-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reserva-form.component.html',
  styleUrl: './reserva-form.component.css'
})
export class ReservaFormComponent {

  responsable: string = '';
  fecha: string = '';
  hora: string = '';
  carrera: string = '';

  constructor(private reservaService: ReservaService) {}

  guardarReserva() {

    // Validar campos vacíos
    if (
      this.responsable === '' ||
      this.fecha === '' ||
      this.hora === '' ||
      this.carrera === ''
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }

    // Validar longitud mínima
    if (this.responsable.length < 3) {
      alert('El nombre del responsable debe tener mínimo 3 caracteres');
      return;
    }

    // Crear objeto reserva
    const reserva = {
      responsable: this.responsable,
      fecha: this.fecha,
      hora: this.hora,
      carrera: this.carrera
    };

    // Enviar al servicio
    this.reservaService.registrarReserva(reserva);

    alert('Reserva guardada correctamente');

  }

  limpiarFormulario() {

    this.responsable = '';
    this.fecha = '';
    this.hora = '';
    this.carrera = '';

  }

}