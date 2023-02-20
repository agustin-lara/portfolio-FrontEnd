import { Component, ElementRef, ViewChildren, QueryList, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('reveal', [
      state('active', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('active => hidden', [
        animate('0.5s')
      ]),
      transition('hidden => active', [
        animate('0.5s')
      ])
    ])
  ]
})
export class ProjectsComponent {

  @ViewChildren('reveal') elements!: QueryList<ElementRef>;
  counter:number = 0;
  isActive:boolean = false;

  @HostListener("window:scroll") handleReveal() {
    this.isActive = this.shouldActive();
  }

  shouldActive():boolean {
    if (this.counter < this.elements.length) {
      if (150 < (window.innerHeight - this.elements.get(this.counter)?.nativeElement.getBoundingClientRect().top)) {
        return true;
      }
    }
    return false;
  }

}

