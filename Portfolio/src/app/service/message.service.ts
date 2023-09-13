import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

SendToFormspree(body:any): Observable<any> {
  return this.http.post("https://portfolio-bnozzi.koyeb.app/message",body)
}
}
