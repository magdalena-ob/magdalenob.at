import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() darkMode = true;

  constructor() { 
  }

  changeColor = false;
  showOverlay = false;
  
  showMenuOverlay() {
    console.log('mobile menu');
    this.showOverlay = true;
  }

  hideMenuOverlay() {
    this.showOverlay = false;
    console.log('hide menu');
  }

  ngOnInit() {
    this.showOverlay = false;
    this.changeColor = false;
  }
  
}
