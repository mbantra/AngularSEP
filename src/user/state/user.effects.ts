import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserService } from 'src/user/services/user.service';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import * as userActions from './user.actions';
import { User } from '../models/user';


@Injectable()
export class UserEffects {

    constructor(private actions$: Actions, private userService: UserService) {}

    @Effect()
    saveUser$: Observable<Action> = this.actions$.pipe(
        ofType(userActions.UserActionTypes.SaveUser),
        map((action: userActions.SaveUser) => action.payload),
        mergeMap((user: User) => this.userService.saveUser(user).pipe(
            map(newUser => (new userActions.SaveUserSuccess(newUser)))
        ))
    );
}


/*
    Create a brand new application. Create one feature module called Post
    set up the routing such that Post is lazily loaded in AppModule.

    In Post, create a model class, add-post component, post-list component
    create Post Service to get all posts and save new post (it echoes)

    set up the ngrx configuration such that you have proper action creates, selectors and reducer.

    create effect for saving new post, make web api call to fake json placeholder and the result add it 
    back to your product list and display it in your post table in post-list component.

    install redux-dev-tools package and the browser for debugging 
    so that you can trace your state and actions that you dispatched.

*/ 