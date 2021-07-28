import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginCredsService {

  private URL = "https://jsonplaceholder.typicode.com/users/1";
  private URL1 = "http://localhost:3000/api/userModel";

  constructor(private http:HttpClient) { }

  getUser():Observable<any> {
    return this.http.get<any>(this.URL);
  }
  
  registerUser(createUser:any){
    return this.http.post(this.URL1, createUser);
  }
}
