import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Job } from './../../classes/job';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  workExp: Job[];

  constructor(private titleService: Title) {
    titleService.setTitle('Todd Goates | About');

    this.workExp = [
      {
        company: 'Q90 Corporation',
        title: 'Software Engineer',
        years: '2014 - Present'
      },
      {
        company: 'A Child\'s Hope Foundation',
        title: 'Web Developer Volunteer',
        years: '2013 - Present'
      }
    ];
  }
}
