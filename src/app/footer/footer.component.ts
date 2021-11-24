import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop(){
    let currentPosition = window.scrollY;

    if(currentPosition > 0) {
      window.scrollTo(0, 0);
    }
  }

}
