import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { FadeInAnimation } from '../animations';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [FadeInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AboutComponent implements OnInit {
  

  playAnimation = false; 
 

  @HostListener('window: scroll')
    scrollFunction() {
     if (window.scrollY > 2400) {
         this.playAnimation = true;
     }

      let currentScroll = document.documentElement.scrollTop;
      console.log('current scroll is', currentScroll);
    }

  constructor() { }


  ngOnInit(): void {
  }

}
