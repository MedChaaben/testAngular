import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()

export class ContactService {

  endpoint = 'http://localhost:8000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor (private http: HttpClient) { }

  // Add contact
  AddContact (data): Observable<any> {
    const API_URL = `${ this.endpoint }/add-contact`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  // Error handling
  errorHandler (error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${ error.status }\nMessage: ${ error.message }`;
    }
    console.log(errorMessage);
    return errorMessage;
  }

}
