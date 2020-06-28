import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rest-countries-angular';

  constructor (private themeMode: ThemeService) { }

  get theme(): string {
    return this.themeMode.theme;
  }

  ngOnInit(): void {
    let theme = localStorage.getItem('theme')

    if(theme) {
      this.themeMode.changeThemeMode(theme)
    }
  }

  appClass = {
    'App': true,
  }
}
