import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../clases/auth/user';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;
  mensaje: string = '';
loading: any;
  constructor(
    public authService: AuthService,
    public router: Router,
    public formBuilder: FormBuilder,
    
  ) {
    this.formularioLogin = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  get Email() {
    return this.formularioLogin.get('email');
  }

  get Contrasenia() {
    return this.formularioLogin.get('contraseña');
  }

  login(formulario: FormGroup) {
    //console.log(formulario.value)
    if (formulario.valid) {
      this.loading=true
      this.authService.signIn(formulario.value).subscribe(
        (res: any) => {
          console.log('logeo Exitoso');

          localStorage.setItem('access_token', res.token);
          //this.router.navigate([""])
          this.authService.setCurrentUser(res);
          this.loading=false
          //this.currentUser = res;
          this.router.navigate(['/']);
        },
        (error) => {
          // console.log(error);
          this.mensaje=error.error.error  
          this.loading=false

        }
      );
    }
  }

  logout() {
    this.authService.doLogout();
  }

  //todo | falta mostrar los contenidos segun la existencia del tokken
}
