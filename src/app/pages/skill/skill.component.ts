import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { SkillService } from "../../services/skill.service";
import { Skill } from "./../../models/skill";

@Component({
  selector: "app-skill",
  templateUrl: "./skill.component.html",
  styleUrls: ["./skill.component.scss"]
})
export class SkillComponent implements OnInit {
  devStartYear: number;
  yearsExp: number;
  skills: Skill[];

  constructor(private titleService: Title, private skillService: SkillService) {}

  ngOnInit() {
    this.titleService.setTitle("Todd Goates | Skills");

    this.devStartYear = 2012;
    this.yearsExp = new Date().getFullYear() - this.devStartYear;

    this.getSkills();
  }

  getSkills(): void {
    this.skills = this.skillService.getSkillsList();
  }
}
