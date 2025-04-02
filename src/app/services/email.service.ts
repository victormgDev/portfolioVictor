import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environments.prod';

export interface ContactFormData{
  email: string;
  name: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) {}

  sendContactForm(formData: ContactFormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
