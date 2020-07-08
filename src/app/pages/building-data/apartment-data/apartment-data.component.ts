import { Component, OnInit } from '@angular/core';

// Función para que al recargar la página el loading no se quede cargando
declare function init_plugins();

@Component({
  selector: 'app-apartment-data',
  templateUrl: './apartment-data.component.html',
  styleUrls: ['./apartment-data.component.css']
})
export class ApartmentDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
