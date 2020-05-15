import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromUser from '../state';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private store: Store<fromUser.State>) { }

  user$: Observable<User>;
  user: User;
  ngOnInit() {
    this.store.pipe(select(fromUser.getSetCurrentUser)).subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }

}
