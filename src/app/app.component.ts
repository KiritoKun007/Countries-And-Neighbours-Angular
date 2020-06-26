import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rest-countries-angular';

  // lightTheme = false
  lightTheme = true

  theme = this.lightTheme ? 'Light-Mode' : 'Dark-Mode'

  appClass = {
    'App': true,
  }
}
