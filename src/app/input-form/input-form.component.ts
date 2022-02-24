import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingItem } from '../shoppinglist-master';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent {
  @Input()
  shoppingItem?: ShoppingItem;

  @Input()
  categories: string[] = [];

  @Output()
  submitItem: EventEmitter<ShoppingItem> = new EventEmitter<ShoppingItem>();

  onSubmit() {
    this.submitItem.emit(this.shoppingItem);
  }
}
