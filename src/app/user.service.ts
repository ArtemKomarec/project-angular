import { Injectable } from '@angular/core';
import { IUser } from './iuser';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  login(data: { name: string; password: string}): Observable<IUser> {
    return this.http
       .post<IUser>(`http://localhost:3000/auth/login`, data);
  }

  constructor(private http: HttpClient) { }
}
