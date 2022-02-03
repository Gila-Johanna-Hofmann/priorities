import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'priorities';
  description = 'keep track of stuff you need or want to buy';
  

  constructor() {}

  ngOnInit(): void {}

  
}
