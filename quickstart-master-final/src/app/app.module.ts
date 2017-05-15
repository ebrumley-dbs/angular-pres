import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';

@NgModule({
  imports: [ BrowserModule, routing, HttpModule],
  declarations: [ AppComponent, PeopleListComponent, PersonDetailsComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
