import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';


const routes: Routes = [
  { path: '', redirectTo: '/Countries', pathMatch: 'full' },
  { path: 'Countries', component: CountriesComponent },
  { path: 'Countries/:id', component: CountryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [
  CountriesComponent,
  CountryComponent
]