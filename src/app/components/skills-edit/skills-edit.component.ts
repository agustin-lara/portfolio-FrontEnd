import { Component, OnInit } from '@angular/core';
import { Hardskill } from 'src/app/models/Hardskill';
import { Softskill } from 'src/app/models/Softskill';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.css']
})
export class SkillsEditComponent implements OnInit {

  constructor(private skillsService:SkillsService) {
    this.selectedSoftskill = new Softskill;
    this.selectedHardskill = new Hardskill;
  }

  selectedSoftskill!: Softskill;
  softskills!: Softskill[];

  selectedHardskill!: Hardskill;
  hardskills!: Hardskill[];


  ngOnInit(): void {
    this.skillsService.getSoftskills().subscribe(response => {
      this.softskills = response;
      console.log(this.softskills);
    });
    this.skillsService.getHardskills().subscribe(response => {
      this.hardskills = response;
      console.log(this.hardskills);
    });
  }

  editSoftskill(skill:Softskill): void {

  }

  deleteSoftskill(id:number): void {

  }

  editHardskill(skill:Hardskill): void {

  }

  deleteHardskill(id:number): void {

  }


}
