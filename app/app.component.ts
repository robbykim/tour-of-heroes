import { Component } from '@angular/core';

// class or constructor for the hero
export class Hero {
  id: number;
  name: string;
}

// essentially the 'render' function from react
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div>
      <label>id: </label>{{hero.id}}
    </div>
    <div>
      <label>name: </label>
      <input value="{{hero.name}}" placeholder="name" />
    </div>
    `
})

// variable definitions
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
