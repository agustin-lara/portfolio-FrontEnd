import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Education } from 'src/app/models/Education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent implements OnInit {

  form!: FormGroup;

  constructor(private educationService: EducationService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id:[''],
      nombre:['',[Validators.required, Validators.minLength(8)]],
      fecha:['',[Validators.required, Validators.minLength(4)]],
      imagen:['',[Validators.required, Validators.minLength(8)]]
    });
  }

  educations: Education[] | undefined;
  selectedEducation: Education | undefined;

  ngOnInit(): void {
    this.getEducations();
  }

  getEducations() {
    return this.educationService.getEducations().subscribe(response => {
      this.educations = response;
    });
  }

  addEducation(education: Education) {
    this.educationService.addEducation(education).subscribe(response => {
      alert(response);
      this.getEducations();
    });
  }

  updateEducation(education: Education) {
    this.educationService.updateEducation(education).subscribe(response => {
      alert(response);
      this.getEducations();
    });
  }

  deleteEducation(id: number) {
    if(confirm("¿Estás seguro de que quieres eliminar esta formación?")) {
      this.educationService.deleteEducation(id).subscribe(response => {
        alert(response);
        this.getEducations();
      });
    }
  }

  selectEducation(id: number) {
    const result = this.educations?.filter(education => education.id === id);
    if(result) {
      this.selectedEducation = {
        id: result[0].id,
        nombre: result[0].nombre,
        fecha: result[0].fecha,
        imagen: result[0].imagen
      }
      this.form.setValue(this.selectedEducation);
    }
  }

  unSelectEducation() {
    this.selectedEducation = undefined;
    this.form.reset();
  }

  onSubmit(education: Education) {
    if(!this.selectedEducation) {
      this.addEducation(education);
    } else {
      this.updateEducation(education);
    }
  }

}
