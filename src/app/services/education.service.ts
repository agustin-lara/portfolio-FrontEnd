import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Education } from '../models/Education';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http:HttpClient) { }

  educationRequest: Object | undefined;

  getEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(environment.apiUrl + "/api/formaciones/1");
    // return this.http.get<Education[]>("assets/data/educations.json");
  }

  addEducation(education: Education) {
    this.educationRequest = {
      nombre: education.nombre,
      fecha: education.fecha,
      imagen: education.imagen,
      perfilId: 1
    };
    return this.http.post(environment.apiUrl + "/api/formaciones", this.educationRequest, {responseType: 'text'});
  }

  updateEducation(education: Education) {
    this.educationRequest = {
      nombre: education.nombre,
      fecha: education.fecha,
      imagen: education.imagen,
      perfilId: 1
    };
    return this.http.put(environment.apiUrl + "/api/formaciones/" + education.id, this.educationRequest, {responseType: 'text'});
  }

  deleteEducation(id: number) {
    return this.http.delete(environment.apiUrl + "/api/formaciones/" + id, {responseType: 'text'});
  }

}
