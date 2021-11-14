import { Component, Input, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() darkMode = true;

  moveHeader = false;

  @HostListener('window:scroll')
  scrollfunction() {
    if(window.scrollY > 250) {
      this.moveHeader = true;
    } else {
      this.moveHeader = false;
    }
  }

  constructor() { 
  }

  changeColor = false;
  showOverlay = false;
  selectedButton: string | undefined;
  
  showMenuOverlay() {
    console.log('mobile menu');
    this.showOverlay = true;
  }

  hideMenuOverlay() {
    this.showOverlay = false;
    console.log('hide menu');
  }

  chosenButton(section: string) {
    if (section == 'home') {
      this.selectedButton = 'home'; 
    } else if (section == 'about') {
      this.selectedButton = 'about';
    } else if (section == 'portfolio') {
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
