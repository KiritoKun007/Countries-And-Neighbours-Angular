import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'country-summary',
  templateUrl: './country-summary.component.html',
  styleUrls: ['./country-summary.component.scss']
})
export class CountrySummaryComponent implements OnInit {

  @Input() theme: string;

  countries = []

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries()
      .subscribe((ctries) => {
        console.log(ctries)
        this.countries = ctries
      })
  }

}
