import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';
import * as fromRoot from '../../app/state/app.state';

/*
main state 
{
    //local user module
    users: {
        UserState
    }

    accounting: {
        AccountingState
    }

    products: {
        ProductState
    } 

....
}
*/
export interface State extends fromRoot.State {
    users: fromUser.UserState;
}


const getUserFeatureSelector = createFeatureSelector<fromUser.UserState>('users');

export const getShowUserContactInfo = createSelector(
    getUserFeatureSelector,
    state => state.showContactInfo
);

export const getSetCurrentUser = createSelector(
    getUserFeatureSelector,
    state => state.currentUser
);

