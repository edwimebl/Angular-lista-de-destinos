import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  standalone: true,
  imports: [CommonModule], // 👈 esto es correcto
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {  
  @Input('idx') position!: number;
  @Input() destino!: DestinoViaje;
  @Output() clicked = new EventEmitter<DestinoViaje>();
  @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor() {}

  ngOnInit(): void {}

  Ir(): boolean {
    this.clicked.emit(this.destino);
    return false;
  }

  getDestinoViaje(): DestinoViaje {
    return this.destino;
  }
}


