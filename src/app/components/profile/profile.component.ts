import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile } from 'src/app/models/Profile';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService:ProfileService, private formBuilder: FormBuilder, private authService: AuthService) {
    this.form = this.formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(8)]],
      titulo:['',[Validators.required, Validators.minLength(8)]],
      descripcion:['',[Validators.required, Validators.minLength(8)]],
      imagen_perfil:['',[Validators.required, Validators.minLength(8)]],
      imagen_portada:['',[Validators.required, Validators.minLength(8)]]
    });
  }

  form!: FormGroup;
  profile: Profile | undefined;
  userLogged: boolean = false;

  ngOnInit(): void {
    this.authService.loggedIn.subscribe({
      next: userLogged => {
        this.userLogged = userLogged;
      }
    });
    this.getProfile();
  }

  updateFormData() {
    if(this.profile) {
      this.form.setValue({
        nombre: this.profile.nombre,
        titulo: this.profile.titulo,
        descripcion: this.profile.descripcion,
        imagen_perfil: this.profile.imagen_perfil,
        imagen_portada: this.profile.imagen_portada
      });
    }
  }

  getProfile() {
    this.profileService.getProfile().subscribe(response => {
      this.profile = response;
      this.updateFormData();
    });
  }

  addProfile(profile: Profile) {
    this.profileService.addProfile(profile).subscribe(response => {
      alert(response);
      this.getProfile();
    });
  }

  updateProfile(profile: Profile) {
    this.profileService.updateProfile(profile).subscribe(response => {
      alert(response);
      this.getProfile();
    });
  }

  deleteProfile() {
    if(this.userLogged) {
      if(confirm("¿Estás seguro de que quieres eliminar el Perfil? Ten en cuenta que al hacer esto también se eliminará toda la informacion del Portafolio")) {
        this.profileService.deleteProfile().subscribe(response => {
          alert(response);
          this.getProfile();
        });
      }
    } else {
      alert("Permiso denegado.");
    }
  }

  onSubmit(profile: Profile) {
    if(this.userLogged) {
      if(this.profile) {
        this.updateProfile(profile);
      } else {
        this.addProfile(profile);
      }
    } else {
      alert("Permiso denegado.")
    }
  }

}
