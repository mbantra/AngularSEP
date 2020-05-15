import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list.component';
import { BoosterPipe } from './shared/pipes/booster.pipe';
import { ColorChangerDirective } from './shared/directives/color-changer.directive';
import { PostListComponent } from './post/post-list.component';
import { LoggerInterceptor } from './shared/interceptors/logger-interceptor';
import { UserTemplateDrivenComponent } from './user/user-template-driven.component';
import { UserReactiveComponent } from './user/user-reactive.component';
import { UserListComponent } from './user/user-list.component';
import { StoreModule } from '@ngrx/store';
import { UserModule } from 'src/user/user.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from 'src/user/state/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    BoosterPipe,
    ColorChangerDirective,
    PostListComponent,
    UserTemplateDrivenComponent,
    UserReactiveComponent,
    UserListComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    UserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
