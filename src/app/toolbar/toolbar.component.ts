import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private themeMode: ThemeService) { }

  get theme(): string {
    return this.themeMode.theme;
  }

  ngOnInit(): void {
  }

  toolbarClasses = {
    'Header': true,
  }

  iconClass = this.theme === 'Light-Mode' ? 'fas fa-moon' : 'fas fa-sun';

  changeTheme() {
    if(this.theme === 'Light-Mode') {
      this.themeMode.changeThemeMode('Dark-Mode')
    } else {
      this.themeMode.changeThemeMode('Light-Mode')
    }
  }

}
