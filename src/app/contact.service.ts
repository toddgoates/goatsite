import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  createContact(contact) {
    const body = JSON.stringify(contact);
    const url = 'https://api.toddgoates.com/contact/';
    return this.http.post(url, body, httpOptions)
      .pipe(
        map((res) => {
          console.log(res)
        })
      );
  }

}
