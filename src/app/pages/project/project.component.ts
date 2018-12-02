import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Project } from "./../../models/project";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"]
})
export class ProjectComponent implements OnInit {
  projects: Project[];

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("Todd Goates | Projects");

    this.projects = [
      {
        name: "A Child's Hope Foundation",
        description:
          "I helped redesign an outdated, static site into a responsive Drupal " +
          "theme and created a system where users could create accounts and register for " +
          "upcoming events. I later built a donation payment processing page using Stripe. " +
          "Several years later, I assisted in migrating the site to a fresh WordPress theme.",
        image: "achf.png",
        link: "https://www.achildshopefoundation.org",
        githubLink: false,
        technologies: ["Drupal", "Stripe", "LESS", "PHP", "jQuery"]
      },
      {
        name: "Level 212 Fitness",
        description:
          "I brought Level 212 to the next level by setting up a new WordPress " +
          "installation with a modern, responsive theme. I set up WooCommerce to be able to " +
          "make transactions online and integrated a newsletter signup with MailChimp. To " +
          "lower hosting costs, I put the new site on AWS and set up automated backups to S3.",
        image: "level212.png",
        link: "http://level212.com",
        githubLink: false,
        technologies: ["Wordpress", "MailChimp", "WooCommerce", "AWS", "MySQL"]
      },
      {
        name: "rock paper scissors",
        description:
          "A fun little project built with Vue.js to play Rock Paper Scissors against " +
          "your browser. The game is broken down to different Vue components. A history of your wins, " +
          "loses, and ties are recorded with timestamps. Your wins are graphed with Chart.js. Players " +
          "have the option to save progress and keep gameplay data in local storage.",
        image: "rockpaperscissors.png",
        link: "https://github.com/toddgoates/rockpaperscissors",
        githubLink: true,
        technologies: ["Vue.js", "Moment.js", "Chart.js", "Local Storage", "Bootstrap"]
      }
    ];
  }
}
