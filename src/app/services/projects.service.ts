import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) { }

  projectRequest: Object | undefined;

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(environment.apiUrl + "/api/proyectos/1");
  }

  addProject(project: Project) {
    this.projectRequest = {
      nombre: project.nombre,
      descripcion: project.descripcion,
      tecnologias: project.tecnologias,
      imagen: project.imagen,
      perfilId: 1
    };
    return this.http.post(environment.apiUrl + "/api/proyectos", this.projectRequest, {responseType: 'text'});
  }

  updateProject(project: Project) {
    this.projectRequest = {
      nombre: project.nombre,
      descripcion: project.descripcion,
      tecnologias: project.tecnologias,
      imagen: project.imagen,
      perfilId: 1
    };
    return this.http.put(environment.apiUrl + "/api/proyectos/" + project.id, this.projectRequest, {responseType: 'text'});
  }

  deleteProject(id: number) {
    return this.http.delete(environment.apiUrl + "/api/proyectos/" + id, {responseType: 'text'});
  }

}
