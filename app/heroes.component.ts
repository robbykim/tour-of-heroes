import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

// essentially the 'render' function from react
// 'selector' i think makes it into an html tag. i.e. <my-app>
// 'template is html'
// 'styles' is component specific css
@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})

// variable definitions
export class HeroesComponent implements OnInit {
  // heroes = to the typed array up top
  heroes: Hero[];
  // why is this one using a colon (:) instead of an equals (=)
  selectedHero: Hero;

  // hero: Hero is typing the argument to the Hero class
  // if input is not of the Hero class it will throw an error
  // not sure what void is doing

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }
}
