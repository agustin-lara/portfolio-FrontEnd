import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  // constructor(private portfolioService: PortfolioService) {}

  // data: any;

  // ngOnInit(): void {
  //   this.portfolioService.getData("assets/data.json").subscribe(response => {
  //     this.data = response;
  //     console.log(this.data);
  //   });
  // }

  ngOnInit(): void {
    
  }

}
