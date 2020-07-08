import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { format } from 'path';
import { UploadFileService } from '../../services/uploadFile/upload-file.service';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';

// Función para que al recargar la página el loading no se quede cargando
declare function init_plugins();

@Component({
  selector: 'app-water-service',
  templateUrl: './water-service.component.html',
  styleUrls: ['./water-service.component.css']
})
export class WaterServiceComponent implements OnInit {
  meterImage: File;
  temporaryImage: string;
  user: User;

  constructor(public _uploadFileService: UploadFileService,
              public _userService: UserService) {
                this.user = this._userService.user;
               }

  ngOnInit() {
    init_plugins();
  }

  dataWaterService(data: NgForm) {
    console.log(data);
    if (data.invalid) {
      console.log(data.invalid);
      return;
    }
  }

  imageSelection(file: File) {
    if (!file) { // Si no existe el archivo que no haga nada
      this.meterImage = null;
      return;
    }  
    if ( file.type.indexOf('image') < 0 ) {
      swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.meterImage = null;
      return;
    }
    this.meterImage = file;

    const reader = new FileReader();
    const urlTemporaryImage = reader.readAsDataURL(file);
    
    reader.onloadend = () => this.temporaryImage = reader.result as string; // Nos brinda la imagen en base 64

  }

  saveData() {

  }

uploadingImage() {
  console.log('Subiendo Imagen');
    // Función regresa una promesa por lo que tengo las opciones then y catch
  this._uploadFileService.uploadFile(this.meterImage, 'users', this.user._id)
      .then( resp => {
        console.log(resp);
      })
      .catch( error => {
        console.log('Error en la carga de imagen...');
      });
}

}
