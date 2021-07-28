import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoProject';
  isLoggedIn:boolean = true;

  constructor() {

  }

  hideLoginCard($event:any) {
    this.isLoggedIn = $event;
  }
}
