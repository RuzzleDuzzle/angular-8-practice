import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './app-warning-alert.component.html',
  styleUrls: ['./app-warning-alert.component.scss']
})
export class AppWarningAlertComponent implements OnInit {
  msg = 'Warning Alert';

  constructor() { }

  ngOnInit() {
  }

}
