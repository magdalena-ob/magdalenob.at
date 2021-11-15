import { Component, Input, OnInit, HostListener } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() darkMode = true;

  moveHeader = false;
  changeColor = false;
  showOverlay = false;
  selectedButton: string | undefined;
  currentContainer: string | undefined;

  constructor(public scrollService: ScrollService) { 
  }

  @HostListener('window:scroll')
  scrollfunction() {
    if(window.scrollY > 250) {
      this.moveHeader = true;
    } else {
      this.moveHeader = false;
    }

    this.currentContainer = this.scrollService.currentSection.value;
    this.selectButton();
  }
 
  showMenuOverlay() {
    console.log('mobile menu');
    this.showOverlay = true;
  }

  hideMenuOverlay() {
    this.showOverlay = false;
    console.log('hide menu');
  }

  selectButton() {
    if (this.currentContainer == 'home') {
      this.selectedButton = 'home';
    } else if (this.currentContainer == 'about') {
      this.selectedButton = 'about';
    } else if (this.currentContainer == 'portfolio' || this.currentContainer == 'work') {
      this.selectedButton = 'portfolio';
    } else {
      this.selectedButton = '';
    }
  }

  ngOnInit() {
    this.showOverlay = false;
    this.changeColor = false;
    this.selectedButton = 'home';
  }
  
}
