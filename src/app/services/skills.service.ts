import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Softskill } from '../models/Softskill';
import { environment } from 'src/environments/environment.development';
import { Hardskill } from '../models/Hardskill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http:HttpClient) { }

  softskillRequest: Object | undefined;
  hardskillRequest: Object | undefined;

  // SOFTSKILLS
  getSoftskills(): Observable<Softskill[]> {
    return this.http.get<Softskill[]>(environment.apiUrl + "/api/habilidades-blandas/1");
  }

  addSoftskill(softskill: Softskill) {
    this.softskillRequest = {
      nombre: softskill.nombre,
      descripcion: softskill.descripcion,
      imagen: softskill.imagen,
      perfilId: 1
    };
    return this.http.post(environment.apiUrl + "/api/habilidades-blandas", this.softskillRequest, {responseType: 'text'});
  }

  updateSoftskill(softskill: Softskill) {
    this.softskillRequest = {
      nombre: softskill.nombre,
      descripcion: softskill.descripcion,
      imagen: softskill.imagen,
      perfilId: 1
    };
    return this.http.put(environment.apiUrl + "/api/habilidades-blandas/" + softskill.id, this.softskillRequest, {responseType: 'text'});
  }

  deleteSoftskill(id: number) {
    return this.http.delete(environment.apiUrl + "/api/habilidades-blandas/" + id, {responseType: 'text'});
  }


  // HARDSKILLS
  getHardskills(): Observable<Hardskill[]> {
    return this.http.get<Hardskill[]>(environment.apiUrl + "/api/habilidades-duras/1");
  }

  addHardskill(hardskill: Hardskill) {
    this.hardskillRequest = {
      nombre: hardskill.nombre,
      dominio: hardskill.dominio,
      color: hardskill.color,
      perfilId: 1
    };
    return this.http.post(environment.apiUrl + "/api/habilidades-duras", this.hardskillRequest, {responseType: 'text'});
  }

  updateHardskill(hardskill: Hardskill) {
    this.hardskillRequest = {
      nombre: hardskill.nombre,
      dominio: hardskill.dominio,
      color: hardskill.color,
      perfilId: 1
    };
    return this.http.put(environment.apiUrl + "/api/habilidades-duras/" + hardskill.id, this.hardskillRequest, {responseType: 'text'});
  }

  deleteHardskill(id: number) {
    return this.http.delete(environment.apiUrl + "/api/habilidades-duras/" + id, {responseType: 'text'});
  }

}
