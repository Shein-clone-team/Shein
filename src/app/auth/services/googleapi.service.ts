import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleapiService {
  private readonly URL = environment.api
  subject = new BehaviorSubject(false);
  private token!: string;



  constructor( http: HttpClient) { }


  logout() {
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_iN');
  }


}
