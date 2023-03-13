import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../clases/auth/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  constructor( 
    public authService: AuthService,
    public router: Router) { }

    user:User=new User();
    email!:string;
    password!:string;

  ngOnInit(): void {
    let defaultUser=new User();
    defaultUser._id="640e51bba352dcc404bc9f38"
    defaultUser.name="bruno"
    defaultUser.email="test@test"
    defaultUser.password="admin"

    this.authService.signUp(defaultUser).subscribe((res) => {
      if (res.result) {
        console.log("registro exitoso")
      }})
  }

  login(){
    this.user._id="0"
    this.user.email=this.email
    this.user.password=this.password
    this.user.name="bruno"
    this.authService.signIn(this.user)

  }

  logout() {
    this.authService.doLogout()
  }

  //? puedo logearme y generar un token
  
  //todo | falta mostrar los contenidos segun la existencia del tokken 



}
