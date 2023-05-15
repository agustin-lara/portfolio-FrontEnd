import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experience } from '../models/Experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http:HttpClient) { }

  experienceRequest: Object | undefined;

  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(environment.apiUrl + "/api/empleos/1");
  }

  addExperience(experience: Experience) {
    this.experienceRequest = {
      nombre: experience.nombre,
      institucion: experience.institucion,
      fecha: experience.fecha,
      imagen: experience.imagen,
      perfilId: 1
    };
    return this.http.post(environment.apiUrl + "/api/empleos", this.experienceRequest, {responseType: 'text'});
  }

  updateExperience(experience: Experience) {
    this.experienceRequest = {
      nombre: experience.nombre,
      institucion: experience.institucion,
      fecha: experience.fecha,
      imagen: experience.imagen,
      perfilId: 1
    };
    return this.http.put(environment.apiUrl + "/api/empleos/" + experience.id, this.experienceRequest, {responseType: 'text'});
  }

  deleteExperience(id: number) {
    return this.http.delete(environment.apiUrl + "/api/empleos/" + id, {responseType: 'text'});
  }

}
