import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Countries } from './country';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient,
    private message: MessageService ) { }

  private log(message: string) {
    this.message.add(`Countries-And-Neighbours: ${message}`);
  }

  private BaseURL = `https://restcountries.eu/rest/v2`
  private countriesURL = `/all?fields=name;capital;region;population;flag;alpha3Code`

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET all countries from the server */
  getCountries(): Observable<Countries[]> {
    return this.http.get<Countries[]>(`${this.BaseURL}${this.countriesURL}`)
      .pipe(
        catchError(this.handleError<Countries[]>('getCountries', []))
      )
  }

}
