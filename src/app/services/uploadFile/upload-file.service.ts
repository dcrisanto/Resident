import { Injectable } from '@angular/core';
import { URL_UPLOAD_IMAGE } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor() { }

  uploadFile(file: File, type: string, id: string) {
    // Realizo una promesa para poder avisar a los demás componentes
    return new Promise((resolve, reject) => {

      // La variable que subiré a la petición por ajax
    let formData = new FormData();
    // Inicializando la petición ajax
    let xhr = new XMLHttpRequest();
    // Configuración
    formData.append( 'image', file, file.name);
    xhr.onreadystatechange = function() {
      // Recibiendo información cada vez que el estado cambie
      if (xhr.readyState === 4) { // Estado cuando termina el proceso
          if (xhr.status === 200) { // Estado ok
            console.log('Imagen subida');
            resolve(JSON.parse(xhr.response));
          } else {
            console.log('Error al subir imagen');
            reject(xhr.response);
          }
      }
    };
    // Url para hacer a la petición
    const  url = URL_UPLOAD_IMAGE + type + '/' + id;

    xhr.open('PUT', url, true); // Para indicar que sea asíncrono: true
    xhr.send(formData);
    });


  }
}
