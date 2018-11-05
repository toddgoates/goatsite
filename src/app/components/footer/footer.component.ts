import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  currYear: number;

  constructor() {}

  ngOnInit() {
    this.currYear = new Date().getFullYear();
  }
}
