import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/models/user';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Post } from '../shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  // saveUser(user: Post): Observable<Post> {
  //   return this.httpClient.post(`${environment.api_url}`, user)
  //   .pipe(map(response => response as Post), catchError(error => throwError(new Error(error))));

  // }
}
