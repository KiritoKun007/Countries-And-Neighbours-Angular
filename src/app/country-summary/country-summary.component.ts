import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Observable, BehaviorSubject, of } from 'rxjs';

import { debounceTime } from 'rxjs/operators';

import { CountryService } from '../country.service';
import { CountryWithOnlyName } from '../country';

@Component({
  selector: 'country-summary',
  templateUrl: './country-summary.component.html',
  styleUrls: ['./country-summary.component.scss']
})
export class CountrySummaryComponent implements OnInit {

  @Input() theme: string;

  countries = []

  countries$: Observable<CountryWithOnlyName[]>;
  private searchTerms = new BehaviorSubject<string>('');
  showSearchedCountries: boolean = false;

  public searchedCountryInput: string = '';
  regionName: string = 'Filter By Region';
  showDropDown: boolean = false;

  searchByRegion = [
    { id: 'africa', name: 'Africa' },
    { id: 'americas', name: 'America' },
    { id: 'asia', name: 'Asia' },
    { id: 'europe', name: 'Europe' },
    { id: 'oceania', name: 'Oceania' },
  ]

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.countryService.getCountries()
      .subscribe((ctries) => {
        console.log(ctries)
        this.countries = ctries
      })

    this.searchTerms.pipe(
      debounceTime(300),
    ).subscribe({
      next: (term) => {
        if(term !== '') {
          this.showSearchedCountries = true
          this.countries$ = this.countryService.searchCountry(term)
        } else {
          this.countries$ = of([])
          this.showSearchedCountries = false
        }
      }
    }) 
  }

  filterCountryByRegion(region: any) {
    console.log(region.id)
    this.regionName = region.name
    this.showDropDown = !this.showDropDown

    this.countryService.getCountriesByRegion(region.id)
      .subscribe((ctries) => {
        this.countries = ctries
      })
  }

  onCountrySelect(name: string) {
    this.router.navigate([name], {relativeTo: this.route})
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

}
