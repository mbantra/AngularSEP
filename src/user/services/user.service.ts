import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/user/models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  path = '';
  saveUser(user: User): Observable<User> {
    return this.http.post(this.path, user).pipe(map(response => response as User));
  }
}
