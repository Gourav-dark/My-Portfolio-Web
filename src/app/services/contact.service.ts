import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private http=inject(HttpClient);
  private baseUrl='https://script.google.com/macros/s/AKfycbwXJ-8jWvtjAfzF2n9JdK_AAGZQPRthmrE3id0Gzexpx7-JVmb0AJVIpV78meRr-mcV/exec';
  // constructor(private http: HttpClient) { }
  postData(name: string, email: string, phone: string, message: string): Observable<any> {
    const body = new HttpParams()
      .set('name', name)
      .set('email', email)
      .set('phoneNumber', phone)
      .set('message', message);

    return this.http.post(this.baseUrl, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
  getData(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}