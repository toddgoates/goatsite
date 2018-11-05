import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
const url = "https://api.toddgoates.com/contact/";

@Injectable()
export class ContactService {
  constructor(private http: HttpClient) {}

  createContact(contact) {
    const body = JSON.stringify(contact);
    return this.http.post(url, body, httpOptions).pipe(
      map(res => {
        console.log(res);
      })
    );
  }
}
