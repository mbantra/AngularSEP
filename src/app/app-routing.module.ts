import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post/post-list.component';
import { ProductListComponent } from './product/product-list.component';
import { UserReactiveComponent } from './user/user-reactive.component';
import { ProductComponent } from './product/product.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UserListComponent } from './user/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full'},
  { path: 'user', component: UserReactiveComponent, canActivate: [AuthGuard]},
  { path: 'post', component: PostListComponent },
  { path: 'product', 
    component: ProductComponent, 
    children: [
      {
        path: 'list', 
        component: ProductListComponent
      }
   ]},
  {
    path: 'accounting',
    loadChildren: () => import('../accounting/accounting.module').then(m => m.AccountingModule)
  },
  {
    path: 'userlist',
    loadChildren: () => import('../user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/* accounting module

accounting/tax
accounting/insurance
..
..

/accounting

  //child routers
  /tax: TaxComponent
  /insurance: InsuranceComponent


*/
