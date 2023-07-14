import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  usuario: any= {
    email: '',
    password: '',
  };
  errorSession: boolean = false;

  email:FormControl = new FormControl('',[Validators.email, Validators.required]);
  formLogin: FormGroup = new FormGroup({});



  constructor(public authServices: AuthService, private router: Router){}

  ngOnInit(): void {
    console.log(this.authServices.Login);
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/), Validators.maxLength(30)]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.min(12)
      ])
    });

  }


  sendLogin(): void{
    const {email, password} = this.formLogin.value
    this.authServices.Login(email, password)

    .subscribe(responseOk => {
      console.log('Seccion iniciada correcta', responseOk);
      this.router.navigate(['/','home',])
    },
    err => {
      this.errorSession = true
      console.log('⚠⚠⚠Ocurrio error con tu email o password');
    })
  }
}
function subscribe(arg0: (responseOk: { tokenSession: any; data: any; }) => void, arg1: (err: any) => void) {
  throw new Error('Function not implemented.');
}

