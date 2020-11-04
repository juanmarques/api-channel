import { WeatherChannelComponent } from './weather-channel/weather-channel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HashtagComponent } from './hashtag/hashtag.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { BibleComponent } from './bible/bible.component';
import { LocationResultComponent } from './weather-channel/location-result/location-result.component';

const routes: Routes = [
    {path: 'weatherUrl', component: WeatherChannelComponent},
    {path: 'hashtagUrl', component: HashtagComponent},
    {path: 'cocktailUrl', component: CocktailComponent},
    {path: 'bibleUrl', component: BibleComponent},
    {path: 'weather-result', component: LocationResultComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRountingModule { }
export const routingComponets = [WeatherChannelComponent, HashtagComponent, CocktailComponent, BibleComponent];
