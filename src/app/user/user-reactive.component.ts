import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Post } from '../shared/models/post';
import { DataService } from '../services/data.service';
import { Store } from '@ngrx/store';

import * as fromUser from '../../user/state/user.reducer';
import * as fromUserActions from '../../user/state/user.actions';

@Component({
  selector: 'app-user-reactive',
  templateUrl: './user-reactive.component.html',
  styleUrls: ['./user-reactive.component.css']
})
export class UserReactiveComponent implements OnInit {

  // userForm = new FormGroup( {
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   phone: new FormControl(''),
  //   email: new FormControl(),

  // });

  // userForm = this.fb.group({
  //   firstName: ['', [Validators.required, Validators.minLength(3)]],
  //   lastName: [''],
  //   phone: ['', this.validatePhoneNumber],
  //   email: ['']
  // });

  userForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    phone: [''],
    email: ['']
  });

  constructor(private fb: FormBuilder, private userService: UserService, 
              private dataService: DataService, private store: Store<fromUser.UserState>) { }

  ngOnInit() {
    this.userForm.setValue( {firstName: 'michael', lastName: 'smith', phone: '123123', email: 'test@test.com'});
    this.userForm.patchValue( {firstName: 'jack'});

  }

  saveUser() {
    console.log(this.userForm.value);
    const user = { ...this.userForm.value };

    this.store.dispatch(new fromUserActions.SetCurrentUser(user));

    this.dataService.saveUser(this.userForm.value);
    // const post = new Post(10, 'title', 'body');
    // this.userService.saveUser(post).subscribe((data) => {
    //   console.log(data);
    // });
  }

  validatePhoneNumber(control: AbstractControl): {[key: string]: any} | null {
    if (control.value && control.value.length !== 10) {
      return { 'invalid phone number': true };
    }
    return null;
  }

}
