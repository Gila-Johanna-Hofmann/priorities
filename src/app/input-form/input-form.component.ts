import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../shoppinglist-master';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  model: any;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  userInput(input: Object) {
    
  }

}
