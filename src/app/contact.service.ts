import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  createContact(contact) {
    const body = JSON.stringify(contact);
    const url = 'https://api.toddgoates.com/contact/';
    return this.http.post(url, body, httpOptions)
      .map((res) => {
        console.log(res.json());
      });
  }

}
