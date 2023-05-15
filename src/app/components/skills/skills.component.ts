import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { Hardskill } from 'src/app/models/Hardskill';
import { Softskill } from 'src/app/models/Softskill';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private skillsService:SkillsService, private authService: AuthService) {}

  softskills: Softskill[] = [];
  hardskills: Hardskill[] = [];
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

  getSoftskills() {
    this.skillsService.getSoftskills().subscribe(response => {
      this.softskills = response;
    });
  }

  getHardskills() {
    this.skillsService.getHardskills().subscribe(response => {
      this.hardskills = response;
    });
  }

}
