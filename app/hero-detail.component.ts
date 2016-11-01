import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
    <!-- *ngIf is an if statement. If the following thing is true it renders.
    In this case it evaluates if selectedHero is defined -->
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `,
})

export class HeroDetailComponent {
  hero: Hero;
}
