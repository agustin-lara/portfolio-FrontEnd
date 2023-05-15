import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hardskill } from 'src/app/models/Hardskill';
import { Softskill } from 'src/app/models/Softskill';
import { AuthService } from 'src/app/services/auth.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.css']
})
export class SkillsEditComponent implements OnInit {

  softForm!: FormGroup;
  hardForm!: FormGroup;

  constructor(private skillsService:SkillsService, private formBuilder: FormBuilder, private authService: AuthService) {
    this.softForm = this.formBuilder.group({
      id:[''],
      nombre:['',[Validators.required, Validators.minLength(8)]],
      descripcion:['',[Validators.required, Validators.minLength(8)]],
      imagen:['',[Validators.required, Validators.minLength(8)]]
    });
    this.hardForm = this.formBuilder.group({
      id:[''],
      nombre:['',[Validators.required]],
      dominio:['',[Validators.required, Validators.min(0), Validators.max(100)]],
      color:['',[Validators.required]]
    });
  }

  softskills: Softskill[] | undefined;
  selectedSoftskill: Softskill | undefined;

  hardskills: Hardskill[] | undefined;
  selectedHardskill: Hardskill | undefined;

  userLogged: boolean = false;


  ngOnInit(): void {
    this.authService.loggedIn.subscribe({
      next: userLogged => {
        this.userLogged = userLogged;
      }
    });
    this.getSoftskills();
    this.getHardskills();
    
  }

  // SOFTSKILLS
  getSoftskills() {
    this.skillsService.getSoftskills().subscribe(response => {
      this.softskills = response;
    });
  }

  addSoftskill(softskill: Softskill) {
    this.skillsService.addSoftskill(softskill).subscribe(response => {
      alert(response);
      this.getSoftskills();
    });
  }

  updateSoftskill(softskill: Softskill) {
    this.skillsService.updateSoftskill(softskill).subscribe(response => {
      alert(response);
      this.getSoftskills();
    });
  }

  deleteSoftskill(id: number) {
    if(this.userLogged) {
      if(confirm("¿Estás seguro de que quieres eliminar esta habilidad blanda?")) {
        this.skillsService.deleteSoftskill(id).subscribe(response => {
          alert(response);
          this.getSoftskills();
        });
      }
    } else {
      alert("Permiso denegado.");
    }
    
  }

  selectSoftskill(id: number) {
    const result = this.softskills?.filter(skill => skill.id === id);
    if(result) {
      this.selectedSoftskill = {
        id: result[0].id,
        nombre: result[0].nombre,
        descripcion: result[0].descripcion,
        imagen: result[0].imagen
      }
      this.softForm.setValue(this.selectedSoftskill);
    }
  }

  getSelectedSoftskillId(): number {
    return this.selectedSoftskill ? this.selectedSoftskill.id : -1;
  }

  unSelectSoftskill() {
    this.selectedSoftskill = undefined;
    this.softForm.reset();
  }

  onSubmitSoftskill(softskill: Softskill) {
    if(this.userLogged) {
      if(!this.selectedSoftskill) {
        this.addSoftskill(softskill);
      } else {
        this.updateSoftskill(softskill);
      }
    } else {
      alert("Permiso denegado.");
    }
    
  }

  // HARDSKILLS
  getHardskills() {
    this.skillsService.getHardskills().subscribe(response => {
      this.hardskills = response;
    });
  }

  addHardskill(hardskill: Hardskill) {
    this.skillsService.addHardskill(hardskill).subscribe(response => {
      alert(response);
      this.getHardskills();
    });
  }

  updateHardskill(hardskill: Hardskill) {
    this.skillsService.updateHardskill(hardskill).subscribe(response => {
      alert(response);
      this.getHardskills();
    });
  }

  deleteHardskill(id: number) {
    if(this.userLogged) {
      if(confirm("¿Estás seguro de que quieres eliminar esta habilidad dura?")) {
        this.skillsService.deleteHardskill(id).subscribe(response => {
          alert(response);
          this.getHardskills();
        });
      }
    } else {
      alert("Permiso denegado.");
    }
    
  }

  selectHardskill(id: number) {
    const result = this.hardskills?.filter(skill => skill.id === id);
    if(result) {
      this.selectedHardskill = {
        id: result[0].id,
        nombre: result[0].nombre,
        dominio: result[0].dominio,
        color: result[0].color
      }
      this.hardForm.setValue(this.selectedHardskill);
    }
  }

  unSelectHardskill() {
    this.selectedHardskill = undefined;
    this.hardForm.reset();
  }

  onSubmitHardskill(hardskill: Hardskill) {
    if(this.userLogged) {
      if(!this.selectedHardskill) {
        this.addHardskill(hardskill);
      } else {
        this.updateHardskill(hardskill);
      }
    } else {
      alert("Permiso denegado.")
    }
  }

}
