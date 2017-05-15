import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  selector: 'person-details',
  templateUrl: 'app/person-details.component.html'
})
export class PersonDetailsComponent implements OnInit, OnDestroy {
  person: Person;
  sub: any;

  constructor(private peopleService: PeopleService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // here is how to get the parameter id number from the url
      let id = Number.parseInt(params['id']);
      console.log('getting person with id: ', id);
      this.peopleService
        .get(id)
        .subscribe(p => this.person = p);
    });
  }

  ngOnDestroy() {
    // to avoid memory leaks
    this.sub.unsubscribe();
  }

  gotoPeoplesList() {
    let link = ['/persons'];
    this.router.navigate(link);
    // you can also use the window.history API instead of the two previous lines:
    // window.history.back();
  }

}
