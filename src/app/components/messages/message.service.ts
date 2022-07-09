import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private url:string = "http://localhost:8080/messages";

  constructor(private http:HttpClient) { }

  //Obtener lista de mensajes de mi base de datos
  getAll(): Observable <Message[]>{
    return this.http.get<Message[]>(this.url);
  }

  //Crear un mensaje
  create(mensaje: Message): Observable <Message>{
    return this.http.post<Message>(this.url,mensaje);
  }

  //Obtener un mensaje
  get(id:number): Observable <Message>{
    return this.http.get<Message>(this.url + "/" + id);
  }

  //Actualizar un mensaje
  update(mensaje: Message): Observable <Message>{
    return this.http.put<Message>(this.url,mensaje);
  }

  //Eliminar un mensaje
  delete(id:number): Observable <Message>{
    return this.http.delete<Message>(this.url + "/" + id);
  }

}
