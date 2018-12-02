import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ProjectService } from "./../../services/project.service";
import { Project } from "./../../models/project";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"]
})
export class ProjectComponent implements OnInit {
  projects: Project[];

  constructor(private titleService: Title, private projectService: ProjectService) {}

  ngOnInit() {
    this.titleService.setTitle("Todd Goates | Projects");
    this.getProjects();
  }

  getProjects(): void {
    this.projects = this.projectService.getProjectsList();
  }
}
