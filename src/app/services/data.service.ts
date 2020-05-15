import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userList = new BehaviorSubject<any>(null);
  data$ = this.userList.asObservable();
  constructor() { }

  saveUser(user) {
    this.userList.next(user);
  }

}
