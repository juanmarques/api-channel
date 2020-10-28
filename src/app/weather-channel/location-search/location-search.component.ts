import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuServiceWeather } from "../servicesWT/apixu.service";
import { SharedService } from "../servicesWT/shared.service";

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public mainLocation:any;
  private isButtonVisible = true;
  
  constructor(
    private formBuilder: FormBuilder,    
    private apixuServiceWeather: ApixuServiceWeather,
    private shared : SharedService
  ){}

  ngOnInit(){
    this.weatherSearchForm = this.formBuilder.group({
      locationName: ['']
    });
  }

  sendToApixuWeather(formValues) {
    this.apixuServiceWeather
      .getWeather(formValues.locationName)
      .subscribe(data => {
        // this.weatherData = data;
        // console.log(this.weatherData);
        // console.log(data);

        this.shared.setMainLocation(this.mainLocation = data);
        // console.log('search');
        // console.log(this.shared.setMainLocation(this.mainLocation = data));
      });
  }
}
