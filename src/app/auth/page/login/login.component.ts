import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { GoogleapiService } from '../../services/googleapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  usuario: any = {
    email: '',
    password: '',
  };
  errorSession: boolean = false;

  email: FormControl = new FormControl('', [
    Validators.email,
    Validators.required,
  ]);
  formLogin: FormGroup = new FormGroup({});

  constructor(
    public authServices: AuthService,
    private router: Router,
    private cookie: CookieService,
    private GoogleApi: GoogleapiService
  ) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/),
        Validators.maxLength(30),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.min(12),
      ]),
    });

    this.logouT();

  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this.authServices
      .Login(email, password)

      .subscribe(
        (responseOk) => {
          console.log('Seccion iniciada correcta', responseOk);
          const { tokenSession ,data } = responseOk;
          this.authServices.user = data
          localStorage.setItem ('token', tokenSession)
          this.cookie.set('token', tokenSession, 1, '/')

          this.router.navigate(['/', 'homepage']);
        },
        (err) => {
          this.errorSession = true;
          console.log('⚠Ocurrio error con tu email o password');
        }
      );
  }



  googleToken() {
    const { email, password } = this.usuario;
    this.GoogleApi.loginWithGoogle(email, password).then((res) => {
      console.log('se registro:', res);
      this.router.navigate(['/homepage']);
    });
  }

  logouT() {
    this.GoogleApi.logout();
  }
}

function subscribe(
  arg0: (responseOk: { tokenSession: any; data: any }) => void,
  arg1: (err: any) => void
) {
  throw new Error('Function not implemented.');
}
