import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

// looks like when you pass in modules and components into the NgModule
// the rest of the app will have access to it
@NgModule({
  // like react native, you have to import in things
  // browsermodule is to specify the environment
  imports: [
    BrowserModule,
    FormsModule
  ],
  // you put all your components in here
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ HeroService ]
})

export class AppModule { }
