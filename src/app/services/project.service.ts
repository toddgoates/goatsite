import { Injectable } from "@angular/core";
import { Project } from "./../models/project";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  projects: Project[] = [
    {
      name: "A Child's Hope Foundation",
      description:
        "I helped redesign an outdated, static site into a responsive Drupal " +
        "theme and created a system where users could create accounts and register for " +
        "upcoming events. I later built a donation payment processing page using Stripe. " +
        "Several years later, I assisted in migrating the site to a fresh WordPress theme.",
      image: "achf.png",
      webLink: "https://www.achildshopefoundation.org",
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
      webLink: "http://level212.com",
      technologies: ["Wordpress", "MailChimp", "WooCommerce", "AWS", "MySQL"]
    },
    {
      name: "Pocket Planetarium",
      description:
        "A fun project built with React to see how much you would weigh on different " +
        "planets in the solar system. The application uses several small components: WeightForm, " +
        "PlanetList, and Planet. The user's weight is kept in state and passed down to the children " +
        "components. I'm using prop-types so that props passed to components are type-checked.",
      image: "planetarium.png",
      webLink: "https://planetarium.toddgoates.com/",
      githubLink: "https://github.com/toddgoates/pocket-planetarium",
      technologies: ["React", "prop-types", "Bootstrap"]
    },
    {
      name: "rock paper scissors",
      description:
        "A fun little project built with Vue.js to play Rock Paper Scissors against " +
        "your browser. The game is broken down to different Vue components. A history of your wins, " +
        "loses, and ties are recorded with timestamps. Your wins are graphed with Chart.js. Players " +
        "have the option to save progress and keep gameplay data in local storage.",
      image: "rockpaperscissors.png",
      webLink: "https://rps.toddgoates.com/",
      githubLink: "https://github.com/toddgoates/rockpaperscissors",
      technologies: ["Vue.js", "Moment.js", "Chart.js", "Local Storage", "Bootstrap"]
    },
    {
      name: "Captain's Log",
      description:
        "Create your own Captain's Log in your browser with the HTML5 Speech Recognition API. " +
        "Enable your browser's microphone and start speaking. The browser will then listen to you " +
        "and transcribe your words in real time. I used CSS Grid to build the layout and some custom CSS " +
        "to mimic the appearance of the Captain's Log on Star Trek.",
      image: "captainslog.png",
      webLink: "https://captainslog.toddgoates.com/",
      githubLink: "https://github.com/toddgoates/captains-log",
      technologies: ["HTML5", "JavaScript", "CSS Grid", "Speech Recognition"]
    }
  ];

  constructor() {}

  getProjectsList(): Project[] {
    return this.projects;
  }
}
