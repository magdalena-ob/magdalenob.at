import { Component, OnInit, ChangeDetectionStrategy, HostListener, Input } from '@angular/core';
import { FadeInAnimation } from '../animations';
import { ScrollService } from '../scroll.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [FadeInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AboutComponent implements OnInit {

  journey = [
    {
      icon: 'assets/icon/walk-line.png',
      text: 'My coding journey started in October 2020, when I decided to follow my passion and focused on diving deep into the world of web development.'
    },
    {
      icon: 'assets/icon/heart-line.png',
      text: 'I love developing apps and it satisfies me the most when the design also looks good in the end. That’s what makes me happy, next to nature, coffee, and french fries.'
    },
    {
      icon: 'assets/icon/search-line.png',
      text: 'I realized despite my big interest in natural sciences, I was longing for a job where I can express my passion for coding and be a part of exciting projects.'
    },
    {
      icon: 'assets/icon/flight-takeoff-line.png',
      text: 'Now I am ready to take off and start my career as a software developer and deepen my programming skills.'
    }
  ];

  playAnimation = false;
  playAnimationStory = false;
  currentScroll: number | undefined;
  currentContainer: string | undefined;
  visible: boolean | undefined;

  @Input() currentSection: any;

  constructor(public scrollService: ScrollService) {
    //this.currentContainer = this.scrollService.currentSection.value;
  }

  @HostListener('window: scroll')
  scrollFunction() {
    //if (window.scrollY > 2400) {
    //    this.playAnimation = true;
    //}
   
    this.currentScroll = window.scrollY;
    console.log('current scroll is', this.currentScroll);
    
    this.currentContainer = this.scrollService.currentSection.value;
    console.log('currentContainer ', this.currentContainer);

    if (this.currentContainer == 'about') {
      this.playAnimation = true; 
     // this.visible = true;
      console.log ('playAnimation about');
    } else if (this.currentContainer == 'story') {
      this.playAnimationStory = true;
      this.visible = true;
      console.log ('playAnimation story');
    }
  }

  ngOnInit(): void {
    this.visible = false;
  }

}
