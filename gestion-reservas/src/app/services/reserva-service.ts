import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  // BehaviorSubject para almacenar la reserva actual
  private reservaSubject = new BehaviorSubject<any>(null);

  // Observable público
  reserva$ = this.reservaSubject.asObservable();

  // Registrar reserva
  registrarReserva(reserva: any) {
    this.reservaSubject.next(reserva);
  }

  // Limpiar reserva
  limpiarReserva() {
    this.reservaSubject.next(null);
  }

}