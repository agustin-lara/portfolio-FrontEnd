import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experience } from 'src/app/models/Experience';
import { PortfolioService } from 'src/app/portfolio/portfolio.service';

@Component({
  selector: 'app-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.css']
})
export class ExperienceEditComponent implements OnInit {

  constructor(private portfolioService:PortfolioService) {
    this.selectedExperience = new Experience();
  }

  selectedExperience!: Experience;
  experiences!: Experience[];

  ngOnInit(): void {
    this.portfolioService.getExperience().subscribe(response => {
      this.experiences = response;
      console.log(response);
    });
  }

  resetForm(form?: NgForm): void {
    if (form) {
      this.selectedExperience = new Experience();
      form.reset();
    }
  }

  addExperience(form?: NgForm): void {
    console.log("Just clicked create!");
  }

  editExperience(experience:Experience): void {
    this.selectedExperience = experience;
  }

  deleteExperience(id:number): void {
    console.log("Just clicked delete ID: " + id + "!");
  }

}
