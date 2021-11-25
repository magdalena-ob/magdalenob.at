import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { FadeInAnimation } from '../animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [FadeInAnimation]
})
export class PortfolioComponent implements OnInit {

  skills = [
    {
      skillName: 'JavaScript', icon: 'assets/icon/java script.png'
    },
    {
      skillName: 'Angular', icon: 'assets/icon/angular.png'
    },
    {
      skillName: 'HTML/CSS', icon: 'assets/icon/Group 205.png'
    },
    {
      skillName: 'SCRUM', icon: 'assets/icon/Group 226.png'
    },
    {
      skillName: 'GIT', icon: 'assets/icon/Git-Icon-1788C 2.png'
    },
    {
      skillName: 'Rest API', icon: 'assets/icon/icons8-rest-api-80 2.png'
    },
    {
      skillName: 'Material Design', icon: 'assets/icon/icons8-design-24.png'
    }, 
    {
      skillName: 'Bootstrap', icon: 'assets/icon/icons8-bootstrap-48.png'
    }, 
    {
      skillName: 'Database', icon: 'assets/icon/icons8-database-52 2.png'
    } 
  ];

  projects = [
    {
      name: 'El Pollo Loco',
      img: 'assets/img/elpolloloco.jpg',
      description: 'JavaScript - based jump and run game.',
      showInfo: false,
      category: 'JavaScript',
      url: 'http://magdalena-obermayr.developerakademie.com/el_pollo_loco/index.html'
    },
    {
      name: 'Pokedex',
      img: 'assets/img/pokedex.jpg',
      description: 'JavaScript - with implemented API.',
      showInfo: false,
      category: 'JavaScript',
      url: 'http://magdalena-obermayr.developerakademie.com/pokedex/index.html'
    },
    {
      name: 'Ring of Fire',
      img: 'assets/img/ringoffire2.jpg',
      description: 'Card game - based on Angular.',
      showInfo: false,
      category: 'Angular',
      url: ''
    },
    {
      name: 'Projekt 4',
      img: 'assets/img/Projekt 3.jpg',
      description: 'Text.',
      showInfo: false,
      category: 'Angular',
      url: ''
    }
  ];

  playAnimationSkill = false;
  playAnimationWork = false;
  playAnimationCategory = false;
  currentContainer: string | undefined;

  @Input() currentSection: any;

  constructor(public scrollService: ScrollService) { }

  filteredProjects: any;
  filteredName: string | undefined;

  //Filterfunktion 
  showCategory(categoryName: string) {
    if (categoryName == 'all') {
      this.filteredProjects = this.projects;
      this.filteredName = 'all';
    } else {
      this.filteredProjects = this.projects.filter(p => p.category == categoryName);
      if (categoryName == 'Angular') {
        this.filteredName = 'angular';
        this.playAnimationCategory = !this.playAnimationCategory;
      } else {
        this.filteredName = 'javaScript';
        this.playAnimationCategory = !this.playAnimationCategory;
      }
    }
  }


  //Animation
  @HostListener('window: scroll')
  animateOnScroll() {
    this.currentContainer = this.scrollService.currentSection.value;

    if (this.currentContainer == 'portfolio') {
      this.playAnimationSkill = true;
      console.log('playAnimation Skills');
    } else if (this.currentContainer == 'work') {
      this.playAnimationWork = true;
      console.log (' work animation');
    }
  }



  ngOnInit() {
    this.filteredProjects = this.projects;
    this.filteredName = 'all';
  }

}