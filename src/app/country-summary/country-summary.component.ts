import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from '../country.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'country-summary',
  templateUrl: './country-summary.component.html',
  styleUrls: ['./country-summary.component.scss']
})
export class CountrySummaryComponent implements OnInit {

  @Input() theme: string;
  @Input() region: string;

  countries = []

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
      this.filterRegion()
  }

  filterRegion() {
    if(this.region.length) {
      this.countryService.getCountriesByRegion(this.region)
        .subscribe((ctries) => {
          this.countries = ctries
        })
    }
  }

  onCountrySelect(name: string) {
    this.router.navigate([name], {relativeTo: this.route})
  }

}
