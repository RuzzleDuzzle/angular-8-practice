import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './app-success-alert.component.html',
  styleUrls: ['./app-success-alert.component.scss']
})
export class AppSuccessAlertComponent implements OnInit {
  msg = 'Success Alert';

  constructor() { }

  ngOnInit() {
  }

}
