import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from "./app.component";

import { WeatherComponent } from "./weather/weather.component";
import { HashtagComponent } from './hashtag/hashtag.component';

import { RouterModule } from "@angular/router";
import { allAppRoutes } from "./routes";
import { ReactiveFormsModule  } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from "./apixu.service";
import { HeaderComponent } from './header/header.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { BibleComponent } from './bible/bible.component';

@NgModule({
  declarations: [ AppComponent, WeatherComponent, HashtagComponent, HeaderComponent, CocktailComponent, BibleComponent ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
