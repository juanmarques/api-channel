import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location){
      return this.http.get(
          'http://api.weatherstack.com/current?access_key=661f3bc12ab0dd1fe470bdb9151ddcbe&query=' + location

          // http://api.weatherstack.com/current?access_key=661f3bc12ab0dd1fe470bdb9151ddcbe&query=Porto
      );
  }
}
