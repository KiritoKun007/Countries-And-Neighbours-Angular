import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Location } from '@angular/common';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  location: Location

  constructor(
    private themeMode: ThemeService,
    location: Location
  ) {
    this.location = location
  }

  get theme() : string {
    return this.themeMode.theme
  }

  ngOnInit(): void {
  }

}
