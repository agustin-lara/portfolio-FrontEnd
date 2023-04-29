import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectsService:ProjectsService) {}

  projects: Project[] | undefined;

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(response => {
      this.projects = response;
      console.log(this.projects);
    });
  }

}