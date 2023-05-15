import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectsService:ProjectsService, private authService: AuthService) {}

  projects: Project[] = [];
  userLogged: boolean = false;

  ngOnInit(): void {
    this.authService.loggedIn.subscribe({
      next: userLogged => {
        this.userLogged = userLogged;
      }
    });
    this.getProjects();
  }

  getProjects() {
    this.projectsService.getProjects().subscribe(response => {
      this.projects = response;
    });
  }

}