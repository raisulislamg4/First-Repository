import { Component } from '@angular/core';

@Component({
  selector: 'srvUp-root',
  templateUrl: './app.component.html',
  // template: `<h1>{{ title }}</h1> <p>{{ description }}  is cool </p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello world!!!';
  description = 'A new app';
}