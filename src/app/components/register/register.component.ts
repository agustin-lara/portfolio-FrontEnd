import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      username:['',[Validators.required, Validators.minLength(6),Validators.maxLength(22)]],
      password:['',[Validators.required, Validators.minLength(8),Validators.maxLength(22)]],
      confirmPassword:['',[Validators.required, Validators.minLength(8),Validators.maxLength(22)]]
    });
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  passwordsMatch(): Boolean {
    const pass = this.form.get('password')?.value;
    const confirmPass = this.form.get('confirmPassword')?.value;
    return pass == confirmPass;
  }

  register(data: any) {

  }


}
