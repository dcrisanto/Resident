import { Component, OnInit } from '@angular/core';

// Función para que al recargar la página el loading no se quede cargando
declare function init_plugins();

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
