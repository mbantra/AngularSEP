import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-user-template-driven',
  templateUrl: './user-template-driven.component.html',
  styleUrls: ['./user-template-driven.component.css']
})
export class UserTemplateDrivenComponent implements OnInit {

  user: User;
  constructor() { }

  ngOnInit() {
    this.user = new User();
  }

  saveUser() {
    console.log(this.user);
  }
}
