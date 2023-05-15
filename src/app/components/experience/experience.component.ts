import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/Experience';
import { AuthService } from 'src/app/services/auth.service';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private experienceService: ExperienceService, private authService: AuthService) {}

  experiences: Experience[] = [];
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

}
