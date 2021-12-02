import { Component, OnInit } from '@angular/core';
import { bounceInDownAnimation, bounceAnimation } from 'angular-animations';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss'],
  animations: [ 
    bounceInDownAnimation(),
    bounceAnimation({duration: 2000})
  ]
})
export class FrontpageComponent implements OnInit {
  playAnimationArrow = false; 

  constructor() {}

  ngOnInit(): void {
    setInterval(() => this.repeatAnimation(), 1500);
  }

  repeatAnimation(){
    this.playAnimationArrow = true;
  }

}
