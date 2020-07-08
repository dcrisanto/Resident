import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../service.index';

@Injectable()
export class LoginGuard implements CanActivate{
  constructor(
              public router: Router,
              public _userService: UserService
              ){}
  canActivate() {
    if ( this._userService.isLogged() ) {
      console.log('Está logeado');
      return true;
    } else {
      this.router.navigate(['/login']);
      console.log('Acceso restringido por el guard');
      return false;
    }
  }
}