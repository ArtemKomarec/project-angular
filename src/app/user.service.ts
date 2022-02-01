import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from 'rxjs';
import { Token } from './token';
import { IUser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  error: string = 'Success';

  login(data: { name: string; password: string }): Observable<Token> {
    return this.http
      .post<Token>(`http://localhost:3000/auth/login`, data).pipe(
        catchError(this.handleError<Token>('Error'))
        )
  }

  getUser(token:string): Observable<IUser> {
    return this.http.get<IUser>('http://localhost:3000/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).pipe(
      catchError(this.handleError<IUser>('error'))
    )
  }

  private handleError<Token>(operation = 'operation', result?: Token) {
    return (error: any): Observable<Token> => {
      error = operation;
      return of(result as Token)
    }
  }

  constructor(private http: HttpClient) { }
}
