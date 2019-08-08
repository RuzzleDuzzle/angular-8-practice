import {Component} from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: [],
})
export class ServerComponent {
  msg =  'Warning Alert';
  username: string;

  onClearUsernameBtnClick() {
    this.username = '';
  }
}
