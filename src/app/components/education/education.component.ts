import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/Education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private educationService: EducationService) {}

  educations: Education[] = [];

  ngOnInit(): void {
    this.getEducations();
  }

  getEducations() {
    return this.educationService.getEducations().subscribe(response => {
      this.educations = response;
    });
  }

}
