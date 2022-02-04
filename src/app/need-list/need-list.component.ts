import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-need-list',
  templateUrl: './need-list.component.html',
  styleUrls: ['./need-list.component.css']
})
export class NeedListComponent implements OnInit {

  @Input() needList: any;

  

  constructor() { 
  }

  ngOnInit(): void {
  }

}
