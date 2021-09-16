import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'magdalenob';

  constructor(private router: Router) { }

  isBlackMenu(){
    return this.router.url ==='/imprint' || this.router.url ==='/data-protection';
  }
}