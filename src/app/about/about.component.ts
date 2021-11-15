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
      text: 'Ready to start a new chapter as a web developer. Maybe at your company?'
    },
    {
      icon: 'assets/icon/heart-line.png',
      text: "I'm passioned about nature, chocolate, music, dancing and french fries."
    },
    {
      icon: 'assets/icon/search-line.png',
      text: 'Looking for a new adventure!'
    },
    {
      icon: 'assets/icon/flight-takeoff-line.png',
      text: 'My coding journey started in October 2020.'
    }
  ];

  playAnimation = false;
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
      this.visible = true;
      console.log ('playAnimation');
    }   
  }

  ngOnInit(): void {
    this.visible = false;
  }

}
