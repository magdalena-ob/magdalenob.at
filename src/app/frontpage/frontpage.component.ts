import { Component, OnInit } from '@angular/core';
import { bounceInDownAnimation, bounceAnimation, fadeInUpOnEnterAnimation, bounceInDownOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss'],
  animations: [ 
    bounceInDownAnimation(),
    bounceAnimation({duration: 2000}),
    fadeInUpOnEnterAnimation({duration: 2000}),
    bounceInDownOnEnterAnimation({duration: 2000})
  ]
})
export class FrontpageComponent implements OnInit {
  playAnimationArrow = false; 
  playAnimationOnload = false;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => this.repeatAnimation(), 450);
  }

  repeatAnimation(){
    this.playAnimationArrow = true;
    this.playAnimationOnload = true;
  }

}
