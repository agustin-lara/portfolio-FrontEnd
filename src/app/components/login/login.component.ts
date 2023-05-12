import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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

  }

  logout() {
    
  }

}
