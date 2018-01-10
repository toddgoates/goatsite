import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  msgSent: boolean;
  contact: {
    name: string,
    email: string,
    phone: string,
    message: string
  };

  constructor(private titleService: Title) {
    titleService.setTitle('Todd Goates | Contact');

    this.msgSent = false;
    this.contact = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }

  fakeSubmit() {
    this.msgSent = true;
    console.dir(this.contact);
  }

}
