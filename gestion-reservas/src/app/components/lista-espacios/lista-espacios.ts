import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-espacios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-espacios.html',
  styleUrl: './lista-espacios.css'
})
export class ListaEspacios {

  espacios = [

  {
    id: 1,
    nombre: 'Laboratorio de Computación',
    tipo: 'Laboratorio',
    capacidad: 30,
    disponible: true,
    ubicacion: 'Bloque A - Piso 2',
    imagen: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
  },

  {
    id: 2,
    nombre: 'Auditorio Principal',
    tipo: 'Auditorio',
    capacidad: 100,
    disponible: false,
    ubicacion: 'Bloque Central',
    imagen: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72'
  },

  {
    id: 3,
    nombre: 'Sala Multimedia',
    tipo: 'Aula Tecnológica',
    capacidad: 40,
    disponible: true,
    ubicacion: 'Bloque B - Piso 1',
    imagen: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
  }

];

}