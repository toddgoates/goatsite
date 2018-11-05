import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ContactService } from "../../services/contact.service";
import { Contact } from "./../../models/contact";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  msgSending: boolean;
  msgSent: boolean;
  contact: Contact;

  constructor(private titleService: Title, private contactService: ContactService) {}

  ngOnInit() {
    this.titleService.setTitle("Todd Goates | Contact");

    this.msgSending = false;
    this.msgSent = false;
    this.contact = {
      name: "",
      email: "",
      phone: "",
      message: ""
    };
  }

  submitForm(): void {
    this.msgSending = true;
    this.contactService.createContact(this.contact).subscribe(() => {
      this.msgSending = false;
      this.msgSent = true;
    });
  }
}
