import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from "./app.component";

import { HeaderComponent } from './header/header.component';

import { AppRountingModule, routingComponets } from './header/routerlink';

import { ReactiveFormsModule  } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ApixuServiceWeather } from "./weather-channel/servicesWT/apixu.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationResultComponent } from './weather-channel/location-result/location-result.component';
import { LocationSearchComponent } from './weather-channel/location-search/location-search.component';

@NgModule({
  declarations: [ AppComponent, HeaderComponent, routingComponets, LocationResultComponent, LocationSearchComponent ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRountingModule,
    BrowserAnimationsModule
  ],
  providers: [Title, ApixuServiceWeather],
  bootstrap: [AppComponent]
})

export class AppModule { }