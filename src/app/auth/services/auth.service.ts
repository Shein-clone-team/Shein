import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface IUser {
  email: string,
  name: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = environment.api;
  user: IUser | null = null;
  constructor(private http: HttpClient) {}

  Login(email: string, password: string): Observable<any> {
    const body = {
      email,
      password,
    };

    return this.http.post(`${this.URL}/auth/login`, body);
  }
}