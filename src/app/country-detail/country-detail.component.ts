import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  @Input() theme: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countryService: CountryService,
  ) { }

  country: any;
  borderCountries: object[] = [];
  currencies: any;
  languages: any;

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      let name = params.get('id')

      console.log(name)

      this.countryService.getCountry(name)
        .subscribe((ctry) => {
          this.country = { ...ctry[0] };

          this.currencies = this.country.currencies.map((currency: any) => currency.name).join(', ')
          this.languages = this.country.languages.map((language: any) => language.name).join(', ')

          this.getBorders(this.country.borders)
        })      
    })

  }

  getBorders(borders: any) {
    if(borders.length > 0) {
      let borderCountryCode = borders.join(';')
      
      this.countryService.getBorderCountries(borderCountryCode)
        .subscribe((border)  => {
          console.log(border)
          this.borderCountries = border
        })

    }
  }

  goToCountry(country: string) {
    this.router.navigate(['/Countries', country])
  }

}
