import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'https://www.pioneers-securities.com/webdataapi/api/Contact';  

  constructor(private http: HttpClient) { }

  sendContactForm(contactData: any): Observable<any> {
    return this.http.post(this.apiUrl, contactData);
  }
}