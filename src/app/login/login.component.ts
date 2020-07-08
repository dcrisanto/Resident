import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

// Función para que al recargar la página el loading no se quede cargando
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _userService: UserService,
              public router: Router) { }

  ngOnInit(){
    init_plugins();
  }

  login( form: NgForm ) {
    if ( form.invalid ) {
      return;
    }

    // Creo una variable de tipo usuario
    const user = new User(null, form.value.email, form.value.password);
    this._userService.login(user, form.value.remember)
      .subscribe( (resp: any) => {
        console.log(resp);
      //  this.router.navigate(['/position']);
      });
  }

}
