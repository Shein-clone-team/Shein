import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { GoogleapiService } from 'src/app/auth/services/googleapi.service';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss'],
})
export class AuthRegisterComponent implements OnInit {
  usuario: any = {
    email: '',
    password: '',
    name: '',
    lastName: '',
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
  }

  registerUser() {
    const { email, password, name, lastName } = this.formLogin.value;
    this.authServices
      .register(email, password, name, lastName)

      .subscribe(
        (responseOk) => {
          console.log('4 iniciada correcta', responseOk);
          this.router.navigate(['/', 'login']);
        },
        (err) => {
          this.errorSession = true;
        }
      );
  }


  googleToken() {
    const { email, password } = this.usuario;
    this.GoogleApi.loginWithGoogle(email, password).then((res) => {
      console.log('se registro:', res);
      this.router.navigate(['/']);
    });
  }

  logouT() {
    this.GoogleApi.logout();
  }
}
