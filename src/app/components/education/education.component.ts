import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/Education';
import { AuthService } from 'src/app/services/auth.service';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private educationService: EducationService, private authService: AuthService) {}

  educations: Education[] = [];
  userLogged: boolean = false;

  ngOnInit(): void {
    this.authService.loggedIn.subscribe({
      next: userLogged => {
        this.userLogged = userLogged;
      }
    });
    this.getEducations();
  }

  getEducations() {
    return this.educationService.getEducations().subscribe(response => {
      this.educations = response;
    });
  }

}
