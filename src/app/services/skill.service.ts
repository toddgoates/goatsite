import { Injectable } from "@angular/core";
import { Skill } from "../models/skill";

@Injectable({
  providedIn: "root"
})
export class SkillService {
  skills: Skill[] = [
    { title: "HTML5", icon: "devicon-html5-plain-wordmark colored" },
    { title: "CSS", icon: "devicon-css3-plain-wordmark colored" },
    { title: "SASS", icon: "devicon-sass-original colored" },
    { title: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { title: "JavaScript", icon: "devicon-javascript-plain colored" },
    { title: "Node.js", icon: "devicon-nodejs-plain-wordmark colored" },
    { title: "Vue.js", icon: "devicon-vuejs-plain-wordmark colored" },
    { title: "Angular", icon: "devicon-angularjs-plain colored" },
    { title: "React", icon: "devicon-react-original colored" },
    { title: "jQuery", icon: "devicon-jquery-plain-wordmark colored" },
    { title: "PHP", icon: "devicon-php-plain colored" },
    { title: "Laravel", icon: "devicon-laravel-plain colored" },
    { title: "MySQL", icon: "devicon-mysql-plain-wordmark colored" },
    { title: "MongoDB", icon: "devicon-mongodb-plain-wordmark colored" },
    { title: "WordPress", icon: "devicon-wordpress-plain-wordmark colored" },
    { title: "Drupal", icon: "devicon-drupal-plain colored" },
    { title: "Linux", icon: "devicon-linux-plain colored" },
    { title: "MacOS", icon: "devicon-apple-original colored" },
    { title: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
    { title: "Ubuntu", icon: "devicon-ubuntu-plain colored" },
    { title: "Docker", icon: "devicon-docker-plain colored" },
    { title: "Photoshop", icon: "devicon-photoshop-line colored" },
    { title: "Illustrator", icon: "devicon-illustrator-line colored" },
    { title: "Git", icon: "devicon-git-plain-wordmark colored" }
  ];

  constructor() {}

  getSkillsList(): Skill[] {
    return this.skills;
  }
}
