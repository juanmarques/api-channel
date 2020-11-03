import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-weather-channel',
  templateUrl: './weather-channel.component.html',
  styleUrls: ['./weather-channel.component.css']
})
export class WeatherChannelComponent implements OnInit {
  showTheResult = false;

  agreed = 0;
  disagreed = 0;
  voters = ['Narco', 'Celeritas', 'Bombasto'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
    console.log(agreed)
  }

  constructor() { }

  ngOnInit() {
  }

}
