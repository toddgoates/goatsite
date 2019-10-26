import { Component, OnInit } from "@angular/core";
import { Router, Event, NavigationStart, NavigationEnd } from "@angular/router";
import NProgress from "nprogress";

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
      if (event instanceof NavigationStart) {
        NProgress.start();
      }

      if (event instanceof NavigationEnd) {
        NProgress.done();

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
