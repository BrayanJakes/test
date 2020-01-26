import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URI } from '../config/uri';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: {Email: string, Password: string}) {
    const uri = `${URI}/Login/Login`
    return this.http.post(uri, user);
  }
}
