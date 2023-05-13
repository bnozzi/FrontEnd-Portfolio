import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthInterceptor } from './auth-interceptor.interceptor';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private path='http://localhost:8083';
  // private path="https://backend-portfolio-j7ck.onrender.com"
  constructor(private http: HttpClient ) { }

  public getEducacion(): Observable<any> {
    return this.http.get(this.path+'/getAllEducation');
  }

  public getEducacionById(id:any):Observable<any>{
    return this.http.get(this.path+'/getEducation/'+id);
  }

  public addEducation(educacion:any):Observable<any>{
    return this.http.post(this.path+'/addEducation',educacion);
  }

  public deleteEducation(id:any):Observable<any>{
    return this.http.delete(this.path+'/deleteEducation/'+id);
  }

  public updateEducation(educacion:any,id:any):Observable<any>{
    return this.http.put(this.path+'/updateEducation/'+id,educacion);
  }
}
