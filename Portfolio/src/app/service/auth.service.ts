import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../clases/auth/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private currentUser = {};
  private path='http://localhost:8083';


  public constructor(private http: HttpClient, public router: Router) {}

  setCurrentUser(user: any) {
    this.currentUser = user;
  }

  // Sign-in
  public signIn(user: User) :Observable<any>{
    return this.http
      .post(this.path+'/login', user)
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  public doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['']);
    }
  }

  // User profile
 

  // Error
  private static handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}


