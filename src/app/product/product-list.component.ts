import { Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList, AfterViewInit, OnDestroy } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductComponent } from './product.component';
import { interval, Subscription, Observable } from 'rxjs';
import { filter, takeWhile } from 'rxjs/operators'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit, OnDestroy {

  productList: Array<Product> = [];
  counter: any;
  timer$: Observable<number>;
  subscribe: Subscription;
  isComplete: boolean;
  @ViewChild('p1')
  private productComponent: ProductComponent;

  @ViewChildren(ProductComponent) prodList: QueryList<ProductComponent>;
  // @ViewChild('txtBox')
  // private textBox: ElementRef;
  
  constructor() { }

  ngOnInit() {
    this.isComplete = true;
    this.productList = [new Product(1, 'notebook'), new Product(2, 'pen'),
    new Product(3, 'pencil'), new Product(4, 'eraser')];

    // this.timer$ = interval(1000);
    const source = interval(1000);
    // const source = new Observable((observer) => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //   observer.next(4);
    //   observer.complete();
    // });
    //output: 0,1,2,3,4,5....
    this.subscribe = source.pipe(filter(val => val % 2 === 0),
    takeWhile(() => this.isComplete)).subscribe(val => { 
      console.log(val);
      this.counter = val;
    }, () => {}, () => console.log('completed!') );


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

  ngOnDestroy() {
    this.isComplete = false;
    this.subscribe.unsubscribe();
  }

  // addProduct(p: Product) {
  //   this.productList.push(p);
  // }
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