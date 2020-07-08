import { Component, OnInit } from '@angular/core';

// Función para que al recargar la página el loading no se quede cargando
declare function init_plugins();

@Component({
  selector: 'app-electric-service',
  templateUrl: './electric-service.component.html',
  styleUrls: ['./electric-service.component.css']
})
export class ElectricServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    init_plugins();
  }

}
