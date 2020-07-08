import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';

// Función para que al recargar la página el loading no se quede cargando
declare function init_plugins();

@Component({
  selector: 'app-beads',
  templateUrl: './beads.component.html',
  styleUrls: ['./beads.component.css']
})
export class BeadsComponent implements OnInit {
  user: User;

  constructor(public router: Router) { }

  ngOnInit() {
    init_plugins();
  }

  previousPage() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user.rol === 'USER_ROL') {
      this.router.navigate(['/login']);
    }
    if (this.user.rol === 'ADMIN_ROL') {
      this.router.navigate(['/position']);
    }
  }

}
