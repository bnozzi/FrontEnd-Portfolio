import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=""
  password=""


  constructor(private authService:AuthService) { }

  login(){
    this.authService.login(this.user, this.password)
  }

  ngOnInit(): void {
  }

}
