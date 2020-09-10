import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Job } from "./../../models/job";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  workExp: Job[];

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("Todd Goates | About");

    this.workExp = [
      {
        company: "Q90 Corporation",
        title: "VP of Development",
        years: "2019 - Present"
      },
      {
        company: "Q90 Corporation",
        title: "Software Engineer",
        years: "2014 - 2019"
      },
      {
        company: "A Child's Hope Foundation",
        title: "Web Developer Volunteer",
        years: "2013"
      }
    ];
  }
}
