import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  public currentSection: BehaviorSubject<string> = new BehaviorSubject('home');
  sections: string[] = ['home', 'about', 'portfolio', 'contact', 'work', 'story']

  constructor() {
    document.addEventListener('scroll', () => {
      this.keepTrack();
    })
  }

  public keepTrack() {
    const viewHeight = window.innerHeight;
    for (var section of this.sections) {  //loop through all sections to check which one is in view

      const element = document.getElementById(section);
      if (element != null) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < viewHeight / 2) {
          this.currentSection.next(section);
        }
      } else {
      }
    }
  }
}
