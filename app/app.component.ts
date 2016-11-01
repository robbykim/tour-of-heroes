import { Component } from '@angular/core';

// class or constructor for the hero
export class Hero {
  id: number;
  name: string;
}

// essentially the 'render' function from react
@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>'
})

// variable definitions
export class AppComponent {
  title = 'Tour of Heroes';
  hero = 'Windstorm';
}
