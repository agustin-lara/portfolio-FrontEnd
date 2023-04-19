import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/Experience';
import { PortfolioService } from 'src/app/portfolio/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private portfolioService:PortfolioService) {}

  experiences!: Experience[];

  ngOnInit(): void {
    this.portfolioService.getExperience().subscribe(response => {
      this.experiences = response;
    });
  }

}
