import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
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
    }
  ];

  projects = [
    {
      name: 'El Pollo Loco', 
      img: 'assets/img/elpolloloco.png',
      description: 'JavaScript - based jump and run game.',
      showInfo: false,
      category: 'JavaScript'
    },
    {
      name: 'Pokedex', 
      img: 'assets/img/pokedex2.png',
      description: 'JavaScript - integrate API.',
      showInfo: false,
      category: 'JavaScript'
    },
    {
      name: 'Projekt 3', 
      img: 'assets/img/Projekt 3.jpg',
      description: 'Text.',
      showInfo: false,
      category: 'Angular'
    },
    {
      name: 'Projekt 4', 
      img: 'assets/img/Projekt 4.jpg',
      description: 'Text.',
      showInfo: false,
      category: 'Angular'
    }
  ];

  filteredProjects: any;

  //Filterfunktion 
  showCategory(categoryName: string) {
    if(categoryName == 'all') {
      this.filteredProjects = this.projects;
    } else{
      this.filteredProjects = this.projects.filter(p => p.category == categoryName);
    }
  }

  constructor() { }

  ngOnInit(){
    this.filteredProjects = this.projects;
  }

}