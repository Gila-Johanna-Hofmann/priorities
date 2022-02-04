import { Component, OnInit } from '@angular/core';
import { NeedListService } from './Services/need-list.service';
import { WantListService } from './Services/want-list.service';
import { PurchasedListService } from './Services/purchased-list.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'priorities';
  description = 'keep track of stuff you need or want to buy';
  needList: object[];
  wantList;
  purchasedList;
  

  constructor(public needListService: NeedListService, public wantListService: WantListService, public purchasedListService: PurchasedListService) {
    this.needList = this.needListService.getList();
    this.wantList = this.wantListService.getList();
    this.purchasedList = this.purchasedListService.getList();
  }

  ngOnInit(): void {}

  onClick() {
    console.log("I'm a lonely, empty click-event-handler.");
  }

  
}
