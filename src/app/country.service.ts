import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of, Subject } from 'rxjs';
import { Countries, Country, CountryWithOnlyName } from './country';
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
  private countryURL = `?fullText=true&fields=name;capital;region;population;flag;nativeName;subregion;topLevelDomain;currencies;languages;borders`

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

  // GET Country Detail from the server
  getCountry(countryName: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.BaseURL}/name/${countryName}${this.countryURL}`)
      .pipe(
        catchError(this.handleError<Country[]>('getCountry', []))
      )
  }

  // GET Border Countries Name from the server
  getBorderCountries(borders: string): Observable<CountryWithOnlyName[]> {
    return this.http.get<CountryWithOnlyName[]>(`${this.BaseURL}/alpha?codes=${borders}&fields=name`)
      .pipe(
        catchError(this.handleError<CountryWithOnlyName[]>('getBorderCountries', []))
      )
  } 

  // GET Countries by Region from the server
  getCountriesByRegion(region: string): Observable<Countries[]> {
    return this.http.get<Countries[]>(`${this.BaseURL}/region/${region}?fields=name;capital;region;population;flag;alpha3Code`)
      .pipe(
        catchError(this.handleError<Countries[]>('getCountries', []))
      )
  } 

  searchCountry(term: string): Observable<CountryWithOnlyName[]> {
    if(!term.trim()) {
      return of([])
    }
    
    return this.http.get<CountryWithOnlyName[]>(`${this.BaseURL}/name/${term}?fields=name`)
      .pipe(
        catchError(this.handleError<CountryWithOnlyName[]>('getSearchedCountriesName', []))
      )
  } 

}
