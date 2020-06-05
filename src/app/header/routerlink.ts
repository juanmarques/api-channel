import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { WeatherComponent } from "../weather/weather.component";
import { HashtagComponent } from '../hashtag/hashtag.component';
import { CocktailComponent } from '../cocktail/cocktail.component';
import { BibleComponent } from '../bible/bible.component';

const routes: Routes = [
    {path: 'weatherUrl', component: WeatherComponent},
    {path: 'hashtagUrl', component: HashtagComponent},
    {path: 'cocktailUrl', component: CocktailComponent},
    {path: 'bibleUrl', component: BibleComponent}
  ]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRountingModule { }
export const routingComponets = [WeatherComponent, HashtagComponent, CocktailComponent, BibleComponent]