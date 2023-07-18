import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/auth/services/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  email: FormControl = new FormControl('', [
    Validators.email,
    Validators.required,
  ]);
  formLogin: FormGroup = new FormGroup({});
  usuario: any = {
    email: '',
    password: '',
  };
  errorSession: boolean = false;
  constructor(
    public authServices: AuthService,
    private cookie: CookieService,
    private router: Router
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

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this.authServices
      .Login(email, password)

      .subscribe(
        (responseOk) => {
          console.log('Seccion Iniciada Correcta', responseOk);
          const { tokenSession, data } = responseOk;
          console.log(data);
          this.cookie.set('token', tokenSession, 4, '/');
          this.router.navigate(['/', 'home']);
        },
        (err) => {
          this.errorSession = true;
          console.log('⚠Ocurrio Error con tu email o password');
        }
      );
  }
}
