import { Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductComponent } from './product.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  productList: Array<Product> = [];
  @ViewChild('p1')
  private productComponent: ProductComponent;

  @ViewChildren(ProductComponent) prodList: QueryList<ProductComponent>;
  // @ViewChild('txtBox')
  // private textBox: ElementRef;
  
  constructor() { }

  ngOnInit() {
    this.productList = [new Product(1, 'notebook'), new Product(2, 'pen'),
    new Product(3, 'pencil'), new Product(4, 'eraser')];

  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    // console.log(this.productComponent.product);
    // console.log(this.textBox.nativeElement.value);
    this.prodList.forEach(prod => console.log(prod.product));
  }

  logPickedProduct(product: Product) {
    console.log(product);
  }

}


/* 
  Add new property "description" to the Product class
  "This is the description for the product"
  1) create custom pipe which will shorten this description to first 20 letters followed by ...
  Id     Name        Descriptuion
  1       P1             D1
  2       P2             This is the descript...

  2) Create one component 'add-product' with fields for id, name and description, and have a "add" button
  to add this new product to the list of product that you have in the parent "product list" component



*/