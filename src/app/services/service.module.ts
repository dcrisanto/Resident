import { NgModule } from "@angular/core";
import { UserService } from './user/user.service';
import { LoginGuard } from './service.index';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    LoginGuard
  ]
})

export class ServiceModule { }