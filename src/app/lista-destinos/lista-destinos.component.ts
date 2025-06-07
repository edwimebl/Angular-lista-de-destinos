import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinoViajeComponent } from "../destino-viaje/destino-viaje.component";
import { DestinoViaje } from "../destino-viaje/destino-viaje.component";



@Component({
  standalone: true,
  selector: 'app-lista-destinos',
  imports: [DestinoViajeComponent, CommonModule],
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent {
  destinos: DestinoViaje[];
  constructor() {
    this.destinos = [];
  }

  //función para manejar el evento de click para guardar del formuario en lista-destinos.component.html
  guardar(nombre: string, url: string): boolean {
    this.destinos.push(new DestinoViaje(nombre, url));    
    // Limpiar los campos del formulario    
    return false; // Evita el envío del formulario y recargar la página
  }

}
