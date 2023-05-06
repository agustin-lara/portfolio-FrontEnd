import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/models/Project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects-edit',
  templateUrl: './projects-edit.component.html',
  styleUrls: ['./projects-edit.component.css']
})
export class ProjectsEditComponent implements OnInit {

  constructor(private projectService:ProjectsService, private formBuilder: FormBuilder) {
    this.addForm = this.formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(8)]],
      descripcion:['',[Validators.required, Validators.minLength(8)]],
      tecnologias:['',[Validators.required, Validators.minLength(8)]],
      imagen:['',[Validators.required, Validators.minLength(8)]]
    });
    this.updateForm = this.formBuilder.group({
      id:['',[Validators.required]],
      nombre:['',[Validators.required, Validators.minLength(8)]],
      descripcion:['',[Validators.required, Validators.minLength(8)]],
      tecnologias:['',[Validators.required, Validators.minLength(8)]],
      imagen:['',[Validators.required, Validators.minLength(8)]]
    });
  }

  projects: Project[] | undefined;
  selectedProject: Project | undefined;
  addForm!: FormGroup;
  updateForm!: FormGroup;

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProjects().subscribe(response => {
      this.projects = response;
    });
  }

  loadFormData(id: number) {
    const result = this.projects?.filter(project => project.id === id);
    if (result) {
      this.updateForm.setValue({
        id: result[0].id,
        nombre: result[0].nombre,
        descripcion: result[0].descripcion,
        tecnologias: result[0].tecnologias,
        imagen: result[0].imagen
      });
    }
  }

  addProject(project: Project) {
    this.projectService.addProject(project).subscribe(response => {
      alert(response);
      this.getProjects();
      this.addForm.reset();
    });
  }

  updateProject(project: Project) {
    this.projectService.updateProject(project).subscribe(response => {
      alert(response);
      this.getProjects();
    });
  }

  deleteProject(id: number) {
    if(confirm("¿Estás seguro de que quieres eliminar este Proyecto?")) {
      this.projectService.deleteProject(id).subscribe(response => {
        alert(response);
        this.getProjects();
      });
    }
  }

}
