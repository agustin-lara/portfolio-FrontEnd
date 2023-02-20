import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  isScrolled = false;
  @HostListener("window:scroll") handleScroll() {
    this.isScrolled = window.scrollY >= 96;
  }

}
