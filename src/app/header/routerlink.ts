import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HashtagComponent } from '../hashtag/hashtag.component';
import { CocktailComponent } from '../cocktail/cocktail.component';
import { BibleComponent } from '../bible/bible.component';
import { WeatherChannelComponent } from '../weather-channel/weather-channel.component';

const routes: Routes = [
    {path: 'hashtagUrl', component: HashtagComponent},
    {path: 'cocktailUrl', component: CocktailComponent},
    {path: 'bibleUrl', component: BibleComponent},
    {path: 'weatherchannel', component: WeatherChannelComponent}
  ]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRountingModule { }
export const routingComponets = [HashtagComponent, CocktailComponent, BibleComponent, WeatherChannelComponent]