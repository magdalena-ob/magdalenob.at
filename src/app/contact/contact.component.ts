import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FadeInAnimation } from '../animations';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [FadeInAnimation]
})
export class ContactComponent implements OnInit {
  playAnimation = false;
  currentContainer: string | undefined;

  @Input() currentSection: any;

  constructor(public scrollService: ScrollService) { }

  //Animation
  @HostListener('window: scroll')
  animateOnScroll() {
    this.currentContainer = this.scrollService.currentSection.value;

    if (this.currentContainer == 'contact') {
      this.playAnimation = true;
    } 
  }

  ngOnInit(): void {
  }


}
