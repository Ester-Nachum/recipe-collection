import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  baseURL = "https://localhost:44328/api/User/";
  login(name: string, password: string) {
    return this.http.get<User>(this.baseURL + `Login?userName=${name}&Password=${password}`);
  }
  Register(re: User) {
    return this.http.post<User>(this.baseURL + "Register", re);
  }

}
