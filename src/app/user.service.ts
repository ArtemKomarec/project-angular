import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from 'rxjs';
import { Token } from '@angular/compiler/src/ml_parser/tokens';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  error: string = '';

  login(data: { name: string; password: string }): Observable<Token> {
    return this.http
      .post<Token>(`http://localhost:3000/auth/login`, data).pipe(
        catchError(this.handleError<Token>('Error'))
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
