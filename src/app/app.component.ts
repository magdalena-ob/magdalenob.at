import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'magdalenob';

  constructor(private router: Router, public scrollService: ScrollService) { 

    scrollService.currentSection.subscribe(
      (res) => {
        console.log("current section: ", res);
      }
    )
  }

  isBlackMenu(){
    return this.router.url ==='/imprint' || this.router.url ==='/data-protection';
  }
}