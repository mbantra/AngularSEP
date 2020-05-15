import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { reducer } from './state/user.reducer';
import { AddUserComponent } from './components/add-user.component';
import { UserListComponent } from './components/user-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AddUserComponent, UserListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path: '', component: UserListComponent}]),
    StoreModule.forFeature('users', reducer)
  ]
})
export class UserModule { }
