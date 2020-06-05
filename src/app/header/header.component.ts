import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

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

  /*  Title Dinamic  */
  title = 'feature';
  constructor(private titleService: Title) {};
  setDocTitle(title: string) {
     console.log('current title:::::' + this.titleService.getTitle());
     this.titleService.setTitle(title);;
  }
  /*  Title Dinamic  */
  
  ngOnInit() {
  }

}
