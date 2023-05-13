import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
logout() {
this.auth.doLogout()
}

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  isLogedIn(){
    return this.auth.isLoggedIn
  }


}
