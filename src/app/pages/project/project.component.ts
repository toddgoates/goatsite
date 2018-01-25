import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from './../../classes/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  projects: Project[];

  constructor(private titleService: Title) {
    titleService.setTitle('Todd Goates | Projects');

    this.projects = [
      {
        name: 'A Child\'s Hope Foundation',
        description: 'I helped redesign an outdated, static site into a responsive Drupal ' +
          'theme and created a system where users could create accounts and register for ' +
          'upcoming events. I later built a donation payment processing page using Stripe. ' +
          'Several years later, I assisted in migrating the site to a fresh WordPress theme.',
        image: 'achf.png',
        link: 'https://www.achildshopefoundation.org',
        technologies: [
          'Drupal',
          'Stripe',
          'LESS',
          'PHP',
          'jQuery'
        ]
      }
    ];
  }

}
