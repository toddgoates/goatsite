// Angular Core
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// Goatsite Routing
import { AppRoutingModule } from "./app-routing.module";

// Goatsite Components
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { SkillComponent } from "./pages/skill/skill.component";
import { ProjectComponent } from "./pages/project/project.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ErrorComponent } from "./pages/error/error.component";

// Goatsite Services
import { ContactService } from "./services/contact.service";
import { SkillService } from "./services/skill.service";
import { ProjectService } from "./services/project.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SkillComponent,
    ProjectComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [ContactService, SkillService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {}
