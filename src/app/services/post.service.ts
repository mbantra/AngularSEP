import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Post } from '../shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]>  {
    return this.http.get(`${environment.api_url}`)
    .pipe(map(response => response as Post[]), catchError(error => throwError(new Error(error)))
    );
  }

  }
