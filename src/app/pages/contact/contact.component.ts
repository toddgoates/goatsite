import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Validator } from '@angular/forms';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  msgSending: boolean;
  msgSent: boolean;
  contact: {
    name: string,
    email: string,
    phone: string,
    message: string
  };

  constructor(
    private titleService: Title,
    private contactService: ContactService) {
      titleService.setTitle('Todd Goates | Contact');

      this.msgSending = false;
      this.msgSent = false;
      this.contact = {
        name: '',
        email: '',
        phone: '',
        message: ''
      };
  }

  submitForm() {
    this.msgSending = true;
    this.contactService.createContact(this.contact)
      .subscribe(() => {
        this.msgSending = false;
        this.msgSent = true;
      });
  }

}
