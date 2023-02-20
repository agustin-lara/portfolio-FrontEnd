import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private dataService:PortfolioService) { }

  data:any;

  ngOnInit(): void {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    });
  }

}
