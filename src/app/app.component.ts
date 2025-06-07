import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DestinoViajeComponent } from "./destino-viaje/destino-viaje.component";
import { ListaDestinosComponent } from "./lista-destinos/lista-destinos.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaDestinosComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularListaDeseos';
}
