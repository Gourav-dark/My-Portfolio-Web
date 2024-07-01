import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private http=inject(HttpClient);
  private url='';
  // constructor(private http: HttpClient) { }
  postContactDetail(data:any){
    return this.http.post(this.url,data);
  }
}