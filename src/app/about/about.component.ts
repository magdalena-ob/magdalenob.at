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


  playAnimation = false;
  currentScroll: number | undefined;
  currentContainer: string | undefined;

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

    //if (this.currentScroll == 0) {
    //  this.currentContainer = 'home';
    //}

    
    

    if (this.currentContainer == 'about') {
      this.playAnimation = true; 
      console.log ('playAnimation');
    }
     
    console.log('currentContainer ', this.currentContainer);
    
  }




  ngOnInit(): void {
  }

}
