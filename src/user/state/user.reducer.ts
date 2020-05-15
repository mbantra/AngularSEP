import { User } from '../models/user';
import { UserActions, UserActionTypes } from './user.actions';

export interface UserState {
    showContactInfo: boolean;
    userList: User[];
    currentUser: User;
    error: string;
}

const initialState: UserState = {
    showContactInfo: false,
    currentUser: null,
    userList: [],
    error: ''
};


export function reducer(state = initialState, action: UserActions): UserState {

    switch (action.type) {
        case UserActionTypes.ShowUserContactInfo:
              return {
            ...state,
            showContactInfo: action.payload
        };
        case UserActionTypes.SetCurrentUser:
              return {
            ...state,
            currentUser: action.payload
        };
        case UserActionTypes.SaveUserSuccess:
              return {
            ...state,
            userList: [...state.userList, action.payload]
        };
    }



}