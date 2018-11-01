import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Skill } from './../../classes/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  devStartYear: number;
  yearsExp: number;
  skills: Skill[];

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Todd Goates | Skills');

    this.devStartYear = 2012;
    this.yearsExp = new Date().getFullYear() - this.devStartYear;

    this.skills = [
      { title: 'HTML5', icon: 'devicon-html5-plain-wordmark colored' },
      { title: 'CSS', icon: 'devicon-css3-plain-wordmark colored' },
      { title: 'SASS', icon: 'devicon-sass-original colored' },
      { title: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { title: 'Node.js', icon: 'devicon-nodejs-plain-wordmark colored' },
      { title: 'Angular', icon: 'devicon-angularjs-plain colored' },
      { title: 'Vue.js', icon: 'devicon-vuejs-plain-wordmark colored' },
      { title: 'jQuery', icon: 'devicon-jquery-plain-wordmark colored' },
      { title: 'PHP', icon: 'devicon-php-plain colored' },
      { title: 'Laravel', icon: 'devicon-laravel-plain colored' },
      { title: 'MySQL', icon: 'devicon-mysql-plain-wordmark colored' },
      { title: 'MongoDB', icon: 'devicon-mongodb-plain-wordmark colored' },
      { title: 'WordPress', icon: 'devicon-wordpress-plain-wordmark colored' },
      { title: 'Drupal', icon: 'devicon-drupal-plain-wordmark colored' },
      { title: 'Linux', icon: 'devicon-linux-plain colored' },
      { title: 'MacOS', icon: 'devicon-apple-original colored' },
      { title: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
      { title: 'Photoshop', icon: 'devicon-photoshop-line colored' },
      { title: 'Illustrator', icon: 'devicon-illustrator-line colored' },
      { title: 'Git', icon: 'devicon-git-plain-wordmark colored' }
    ];
  }

}
