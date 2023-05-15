import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form!: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      username:['',[Validators.required, Validators.minLength(6),Validators.maxLength(22)]],
      password:['',[Validators.required, Validators.minLength(8),Validators.maxLength(22)]]
    });
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  login(user: User) {
    this.authService.login(user).subscribe({
      next: response => {
        localStorage.setItem("username", user.username);
        localStorage.setItem("token", response);
        this.router.navigateByUrl("/");
      },
      error: error => {
        alert(error.error);
      }
    });
  }

}
