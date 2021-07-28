import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginCredsService {

  private URL = "https://jsonplaceholder.typicode.com/users/1";

  constructor(private http:HttpClient) { }

  getUser():Observable<any> {
    return this.http.get<any>(this.URL);
  }
}
