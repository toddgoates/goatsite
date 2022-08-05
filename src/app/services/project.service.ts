import { Injectable } from "@angular/core";
import { Project } from "./../models/project";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  projects: Project[] = [
    {
      name: "North Texas Process Server",
      description:
        "This is a website I built for my father-in-law's business in Denton, Texas. " +
        "The site was built with SvelteKit, Typescript, Tailwind CSS, and a serverless function " +
        "for sending an email from the contact form via MailGun. I later added a payments page " +
        "using Stripe. It is hosted on Vercel for fast builds and automated deployments.",
      image: "notxps.PNG",
      webLink: "https://www.northtexasprocessserver.com",
      technologies: ["SvelteKit", "TailwindCSS", "Typescript", "MailGun", "Vercel", "Stripe"]
    },
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
      name: "Pocket Planetarium",
      description:
        "A fun project built with React to see how much you would weigh on different " +
        "planets in the solar system. The application uses several small components: WeightForm, " +
        "PlanetList, and Planet. The user's weight is kept in context and passed to sibling " +
        "components. I'm using styled components for scoping CSS.",
      image: "planetarium.png",
      webLink: "https://planetarium.toddgoates.com/",
      githubLink: "https://github.com/toddgoates/react-planetarium",
      technologies: ["React", "Styled Components"]
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
