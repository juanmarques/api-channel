import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from "./app.component";

import { HeaderComponent } from './header/header.component';

import { AppRountingModule, routingComponets } from './app-routing.module';

import { ReactiveFormsModule  } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from "./apixu.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ AppComponent, HeaderComponent, routingComponets ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRountingModule,
    BrowserAnimationsModule
  ],
  providers: [ApixuService, Title],
  bootstrap: [AppComponent]
})


export class AppModule { }