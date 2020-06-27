import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  region: any;

  constructor(private themeMode: ThemeService) { }

  get theme(): string {
    return this.themeMode.theme
  }

  ngOnInit(): void {
  }

}
