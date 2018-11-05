import { Component, OnInit } from "@angular/core";
import { Router, Event, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isCollapsed = true;

    // Collapse navbar and change view on route change
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isCollapsed = true;

        // For logging page views with Google Analytics
        (<any>window).ga("set", "page", event.urlAfterRedirects);
        (<any>window).ga("send", "pageview");
      }
    });
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
