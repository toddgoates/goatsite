import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currYear: number;

  constructor() {
    this.currYear = new Date().getFullYear();
  }

}
