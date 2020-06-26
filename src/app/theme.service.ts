import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme: string = 'Light-Mode';

  themeChange: Subject<string> = new Subject<string>()

  constructor() {
    this.themeChange.subscribe((value) => {
      console.log(value)
      this.theme = value
    })
  }

  changeThemeMode(getTheme: string) {
    console.log(getTheme)
    this.themeChange.next(getTheme)
  }

}
