import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list.component';
import { BoosterPipe } from './shared/pipes/booster.pipe';
import { ColorChangerDirective } from './shared/directives/color-changer.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    BoosterPipe,
    ColorChangerDirective
  ],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
