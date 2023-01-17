import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'https://localhost:3000/api';
  token: any;



  constructor(private http: HttpClient, private router:Router) {}

  login(email:String , password:String){
    this.http.post(this.api+"/auth",{email: email, password: password}).subscribe((resp:any)=>{
      this.router.navigate(["Profile"])
      localStorage.setItem("authToken", resp.token);
    })
  }

  logout(){
    localStorage.removeItem("authToken");
  }

  public isLogin():Boolean{
    return localStorage.getItem("authToken")!==null
  }

}
