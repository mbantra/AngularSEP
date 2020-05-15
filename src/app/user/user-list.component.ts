import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { UserState } from '../../user/state/user.reducer';

import * as userSelectors from '../../user/state/';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private dataService: DataService, private store: Store<UserState>) { }

  user$: Observable<User>;

  ngOnInit() {
    // this.user$ = this.dataService.data$;

    this.user$ = this.store.pipe(select(userSelectors.getSetCurrentUser));
  }

}
