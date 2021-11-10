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

  //@HostListener('scroll') onScrollHost(e: Event): void {
  //  console.log(this.getYPosition(e));
  //}

  playAnimation = false; 

  @HostListener('document: scroll')
    scrollFunction() {
      if (document.body.scrollTop > 2500 || document.documentElement.scrollTop) {
        this.playAnimation = true;
      }
    }

  constructor() { }

 // getYPosition(e: Event): number {
 //   return (e.target as Element).scrollTop;
 // }

  ngOnInit(): void {
  }

}
