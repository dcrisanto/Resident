import { Component, OnInit } from '@angular/core';

// Función para que al recargar la página el loading no se quede cargando
declare function init_plugins();

@Component({
  selector: 'app-building-data',
  templateUrl: './building-data.component.html',
  styleUrls: ['./building-data.component.css']
})
export class BuildingDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
