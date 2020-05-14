import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list.component';
import { BoosterPipe } from './shared/pipes/booster.pipe';
import { ColorChangerDirective } from './shared/directives/color-changer.directive';
import { PostListComponent } from './post/post-list.component';
import { LoggerInterceptor } from './shared/interceptors/logger-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    BoosterPipe,
    ColorChangerDirective,
    PostListComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
