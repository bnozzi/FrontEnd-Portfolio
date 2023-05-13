import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {
// private path ="http://localhost:8083";
  private path ="https://backend-portfolio-j7ck.onrender.com";
  constructor(private http: HttpClient) { }

  public getSkills(): Observable<any> {
    return this.http.get(this.path+'/getAllSkillCategories');
  
  }

  public addSkill(skill:any): Observable<any> {
    return this.http.post(this.path+'/addSkillCategory',skill);
  }

  public updateSkill(skill:any , id: any): Observable<any> {
    return this.http.put(this.path+'/updateSkillCategory/'+id,skill);
  }

  public deleteSkill(id: any): Observable<any> {
    return this.http.delete(this.path+'/deleteSkillCategory/'+id);
  }
}
