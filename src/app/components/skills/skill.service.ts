import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private url:string = "http://localhost:8080/skills";

  constructor(private http:HttpClient) { }

  //Obtener lista de usuarios de mi base de datos
  getAll(): Observable <Skill[]>{
    return this.http.get<Skill[]>(this.url);
  }

  //Crear una Habilidad
  create(skill: Skill): Observable <Skill>{
    return this.http.post<Skill>(this.url,skill);
  }

  //Obtener una Habilidad
  get(id:number): Observable <Skill>{
    return this.http.get<Skill>(this.url + "/" + id);
  }

  //Actualizar una Habilidad
  update(skill: Skill): Observable <Skill>{
    return this.http.put<Skill>(this.url,skill);
  }

  //Eliminar una Habilidad
  delete(id:number): Observable <Skill>{
    return this.http.delete<Skill>(this.url + "/" + id);
  }

}