import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Validator } from '@angular/forms';
import { ContactService } from '../../contact.service';
import { Contact } from './../../classes/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  msgSending: boolean;
  msgSent: boolean;
  contact: Contact;

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

  submitForm(): void {
    this.msgSending = true;
    this.contactService.createContact(this.contact)
      .subscribe(() => {
        this.msgSending = false;
        this.msgSent = true;
      });
  }

}
