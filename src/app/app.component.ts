import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rest-countries-angular';

  constructor (private themeMode: ThemeService) { }

  get theme(): string {
    return this.themeMode.theme;
  }

  appClass = {
    'App': true,
  }
}
