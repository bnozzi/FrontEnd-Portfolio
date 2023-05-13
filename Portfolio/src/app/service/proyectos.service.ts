import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private path ="http://localhost:8083";
  // private path ="https://backend-portfolio-j7ck.onrender.com";

  constructor(private http: HttpClient) { }

  public getPoyects(): Observable<any> {
    return this.http.get(this.path+'/getAllProyects');
  }

  public addProyect(proyect:any): Observable<any> {
    return this.http.post(this.path+'/addProyect', proyect);
  }

  public deleteProyectById(id:any): Observable<any> {
    return this.http.delete(this.path+'/deleteProyect/'+id);
  }

  public updateProyect(proyect:any,id:any): Observable<any> {
    return this.http.put(this.path+'/updateProyect/'+id, proyect);
  }
  
}
