import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'filter-and-search-countries',
  templateUrl: './filter-and-search-countries.component.html',
  styleUrls: ['./filter-and-search-countries.component.scss']
})
export class FilterAndSearchCountriesComponent implements OnInit {

  @Input() theme: string;
  @Output() filterByRegion = new EventEmitter()
  
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

  constructor() { }

  ngOnInit(): void {
  }

  filterCountryByRegion(region: any) {
    console.log(region.id)
    this.regionName = region.name
    this.showDropDown = !this.showDropDown
    this.filterByRegion.emit(region.name)
  }

}
