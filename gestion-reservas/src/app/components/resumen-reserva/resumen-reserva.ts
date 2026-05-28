import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaService } from '../../services/reserva-service';

@Component({
  selector: 'app-resumen-reserva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resumen-reserva.html',
  styleUrl: './resumen-reserva.css'
})
export class ResumenReserva {

  reserva$;

  constructor(private reservaService: ReservaService) {
    this.reserva$ = this.reservaService.reserva$;
  }

}