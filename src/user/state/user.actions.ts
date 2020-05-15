import { Action } from '@ngrx/store';
import { User } from '../../app/shared/models/user';

export enum UserActionTypes {
    ShowUserContactInfo = '[User] Show User Contact Info',
    SetCurrentUser = '[User] Set Current User',
    SaveUser = '[User] Save User',
    SaveUserSuccess = '[User] Save User Success'
}

//Action Creators
export class ShowUserContactInfo implements Action {
    readonly type = UserActionTypes.ShowUserContactInfo;
    constructor(public payload: boolean) {}
}

export class SetCurrentUser implements Action {
    readonly type = UserActionTypes.SetCurrentUser;
    constructor(public payload: User) {}
}

export class SaveUser implements Action {
    readonly type = UserActionTypes.SaveUser;
    constructor(public payload: User) {}
}

export class SaveUserSuccess implements Action {
    readonly type = UserActionTypes.SaveUserSuccess;
    constructor(public payload: User) {}
}

//union type
export type UserActions = ShowUserContactInfo 
    | SetCurrentUser
    | SaveUser
    | SaveUserSuccess;
    