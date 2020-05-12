import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //id = 333;
  //isCartShown = true;
  //todaysDate = new Date();
  //name = 'hello world';
  
  @Input() product: Product;
  @Output() clicked = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {

    // this.isCartShown = true;
  }

  pickProduct() {
    this.clicked.emit(this.product);
  }
  // changeName(inputName: string): void {
  //   console.log(inputName);
  //   this.name = inputName;
  // }

  // logName(input: string) {
  //   console.log(input);
  // }

}
