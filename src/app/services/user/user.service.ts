import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { URL_SERVICES } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string;
  user: User;
  menu: any[] = [];

  constructor(public http: HttpClient,
              public router: Router) { 
    this.loadStorage();
  }

  isLogged() {
    return ( this.token.length > 5 ) ? true : false;
  }

  loadStorage() {
    if (localStorage.getItem('token')) {
     this.token = localStorage.getItem('token');
     this.user = JSON.parse(localStorage.getItem('user'));
     this.menu = JSON.parse(localStorage.getItem('menu'));
    } else {
      this.token = '';
      this.user = null;
      //this.menu = [];
    }
  }

  // Save Local Storage
  saveStorage(id: string, token: string, user: User, menu: any) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    // Usuario como es un objeto lo guardo como string porq sólo eso acepta el Storages
    localStorage.setItem('user', JSON.stringify(user));
    //localStorage.setItem('menu', JSON.stringify(menu));

    // Setear los valores
    this.user = user;
    this.token = token;
    //this.menu = menu;

   }

  // Logeo Normal
  login(user: User, remember: boolean) {
    if (remember) {
     localStorage.setItem('email', user.email);
   } else {
     localStorage.removeItem('email');
   }
    const url = URL_SERVICES + '/login';
    const imgURL = 'https://scontent.flim18-1.fna.fbcdn.net/v/t1.15752-9/107279067_892791791207991_1625698225234446160_n.jpg?_nc_cat=103&_nc_sid=b96e70&_nc_eui2=AeHFBxNdRQ7MSDCmtSC4zEjBnYroXidi8TGdiuheJ2LxMYdU9kSD01MaFVjvy5TuBGFFnTSA55yr4tL3pCBjNqDE&_nc_ohc=tAB7ammsoXkAX84FxxD&_nc_ht=scontent.flim18-1.fna&oh=f64ab4b7fd7c5c9f4899db298f144699&oe=5F29707B';
    return this.http.post(url, user)
     .pipe(
       map( (resp: any) => {
         if ( resp.user.rol === 'ADMIN_ROL') {
          swal('Login exitoso', resp.user.name + ':' + ' ' + user.email, 'success');
          this.saveStorage(resp.id, resp.token, resp.user, resp.menu);
          this.router.navigate(['/position']);
          return true;
         }
         if ( resp.user.rol === 'USER_ROL' ) {
           swal('¡Bienvenido Residente!', resp.user.name, imgURL);
          /*swal({
            title: '¡Bienvenido Residente!',
            icon: imgURL
          });*/
           this.saveStorage(resp.id, resp.token, resp.user, resp.menu);
           this.router.navigate(['/beads']);
           return true;
         }
       }));
  }
}
