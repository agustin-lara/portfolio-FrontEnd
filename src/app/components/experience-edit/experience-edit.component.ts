import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Experience } from 'src/app/models/Experience';
import { AuthService } from 'src/app/services/auth.service';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.css']
})
export class ExperienceEditComponent implements OnInit {

  form!: FormGroup;

  constructor(private experienceService: ExperienceService, private formBuilder: FormBuilder, private authService: AuthService) {
    this.form = this.formBuilder.group({
      id:[''],
      nombre:['',[Validators.required, Validators.minLength(8)]],
      institucion:['',[Validators.required, Validators.minLength(8)]],
      fecha:['',[Validators.required, Validators.minLength(8)]],
      imagen:['',[Validators.required, Validators.minLength(8)]]
    });
  }

  experiences: Experience[] | undefined;
  selectedExperience: Experience | undefined;
  userLogged: boolean = false;

  ngOnInit(): void {
    this.authService.loggedIn.subscribe({
      next: userLogged => {
        this.userLogged = userLogged;
      }
    });
    this.getExperiences();
  }

  getExperiences() {
    this.experienceService.getExperiences().subscribe(response => {
      this.experiences = response;
    });
  }

  addExperience(experience: Experience) {
    this.experienceService.addExperience(experience).subscribe(response => {
      alert(response);
      this.getExperiences();
    });
  }

  updateExperience(experience: Experience) {
    this.experienceService.updateExperience(experience).subscribe(response => {
      alert(response);
      this.getExperiences();
    });
  }

  deleteExperience(id: number) {
    if(this.userLogged) {
      if(confirm("¿Estás seguro de que quieres eliminar esta experiencia?")) {
        this.experienceService.deleteExperience(id).subscribe(response => {
          alert(response);
          this.getExperiences();
        });
      }
    } else {
      alert("Permiso denegado.");
    }
  }

  selectExperience(id: number) {
    const result = this.experiences?.filter(experience => experience.id === id);
    if(result) {
      this.selectedExperience = {
        id: result[0].id,
        nombre: result[0].nombre,
        institucion: result[0].institucion,
        fecha: result[0].fecha,
        imagen: result[0].imagen
      }
      this.form.setValue(this.selectedExperience);
    }
  }

  unSelectExperience() {
    this.selectedExperience = undefined;
    this.form.reset();
  }

  onSubmit(experience: Experience) {
    if(this.userLogged) {
      if(!this.selectedExperience) {
        this.addExperience(experience);
      } else {
        this.updateExperience(experience);
      }
    } else {
      alert("Permiso denegado.");
    }
    
  }

}
