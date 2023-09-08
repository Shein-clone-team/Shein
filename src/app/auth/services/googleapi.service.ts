import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GoogleapiService {
  private readonly URL = environment.api;
  subject = new BehaviorSubject(false);
  private token!: string;

  constructor(http: HttpClient, private afauth: AngularFireAuth, ) {}


  async loginWithGoogle(email: string, password: string) {
    try {
      console.log('usuario registrado');

      return await this.afauth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
    } catch (err) {
      console.log('error en el login', err);
      return null;
    }
  }

  logout() {
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_iN');
  }
}
