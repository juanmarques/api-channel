import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {
  
  profileForm = new FormGroup({
    tag: new FormControl(''),
    // lastName: new FormControl(''),
  });

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);

  let tag = this.profileForm.value;
  console.warn(tag);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(tag);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw
    // body: raw,
    // redirect: 'follow'
  };

fetch("https://apinsta.herokuapp.com/tag", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
}

  constructor() { }

  ngOnInit() {
  }
}
