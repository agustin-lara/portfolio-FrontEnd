import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { Hardskill } from 'src/app/models/Hardskill';
import { Softskill } from 'src/app/models/Softskill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private skillsService:SkillsService) {}

  softskills: Softskill[] = [];
  hardskills: Hardskill[] = [];

  ngOnInit(): void {
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
