import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelectedNav = new EventEmitter<string>();

  onSelectNav(feature: string){
    this.featureSelectedNav.emit(feature);
    console.log(feature);
  }

  constructor() { }

  ngOnInit() {
  }

}
