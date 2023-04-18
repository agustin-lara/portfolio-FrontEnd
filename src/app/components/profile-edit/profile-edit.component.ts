import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  profile!: Profile;
  form!:FormGroup;

  constructor(private profileService:ProfileService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(6),Validators.maxLength(18)]],
      titulo:['',[Validators.required, Validators.minLength(8)]],
      descripcion:['',[Validators.required, Validators.minLength(8)]],
      imagen_perfil:['',[Validators.required, Validators.minLength(8)]],
      imagen_portada:['',[Validators.required, Validators.minLength(8)]]
    });

  }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(response => {

      this.form.setValue({"nombre":response.nombre,
                          "titulo":response.titulo,
                          "descripcion":response.descripcion,
                          "imagen_perfil":response.imagen_perfil,
                          "imagen_portada":response.imagen_portada});
    });
  }

  onUpdate(): void {
    this.profileService.updateProfile(this.form.value).subscribe(response => {
      this.profile = response;
    });
  }

}
