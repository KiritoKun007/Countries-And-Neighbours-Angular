import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input('theme') theme: any

  @Output() changeThemeEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  toolbarClasses = {
    'Header': true,
  }

  iconClass = this.theme !== 'Light-Mode' ? 'fas fa-moon' : 'fas fa-sun';

  changeTheme() {
    if(this.theme === 'Light-Mode') {
      this.changeThemeEvent.emit('Dark-Mode')
    } else {
      this.changeThemeEvent.emit('Light-Mode')
    }
  }

}
