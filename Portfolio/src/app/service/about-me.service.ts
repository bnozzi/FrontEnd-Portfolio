import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  public path:string='https://backend-portfolio-j7ck.onrender.com'
  // private path='http://localhost:8083';


  constructor(private http: HttpClient) { }

  public getAboutMe(): Observable<any> {
    return this.http.get(this.path+'/aboutMe');
  }
  public updateAboutMe(aboutMe: any): Observable<any> {
    return this.http.put(this.path+'/updateAboutMe', aboutMe);
  }
}
