import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { SharedService } from '../servicesWT/shared.service'

@Component({
  selector: 'app-location-result',
  templateUrl: './location-result.component.html',
  styleUrls: ['./location-result.component.css']
})
export class LocationResultComponent implements OnInit {
  mainLocation: any;

  constructor(
    private shared: SharedService
  ) { }

  ngOnInit() {
    setInterval(() => {
      this.mainLocation = this.shared.getMainLocation();
      console.log(this.mainLocation);

      // if(this.mainLocation != null){
      // console.log('comi um marisquinhoooooooooooooo');
      // return;
      // }
    }, 1000);
  }
}
