import { Component } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'my-app',
  template: `
    <h1> {{title}} </h1>
    <router-outlet></router-outlet>
  `,
  // This registers the PeopleService
  providers: [PeopleService]
})
export class AppComponent {
  title: string = 'SWAPI - Star Wars People!';
}
