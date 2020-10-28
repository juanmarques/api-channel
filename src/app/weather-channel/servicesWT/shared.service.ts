import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  mainLocation: any;

  constructor() { }

  setMainLocation(data){
    // console.log('set');
    // console.log(data);
    this.mainLocation = data;
    this.getMainLocation();
  }
  getMainLocation(){
    // console.log('service get---');
    // console.log(this.mainLocation);
    // return this.mainLocation;
    this.mainLocation.subscribe(()=>{
      
    });
  }
}