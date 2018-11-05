import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { SkillComponent } from "./pages/skill/skill.component";
import { ProjectComponent } from "./pages/project/project.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ErrorComponent } from "./pages/error/error.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "skills", component: SkillComponent },
  { path: "projects", component: ProjectComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "404", component: ErrorComponent },
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
