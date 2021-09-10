import { IBaseActionCreator } from '.';

export interface UserAuthModel {
    email: string
} 

export interface IAuthReducerModel {
    dataIsLoading: boolean,
    auth: UserAuthModel
}

export enum AuthActionTypes {
    DATA_IS_LOADING = 'DATA_IS_LOADING',
    SET_AUTHENTICATED = 'SET_AUTHENTICATED'
}

export interface AuthDataIsLoadingAction extends IBaseActionCreator<AuthActionTypes.DATA_IS_LOADING, boolean> {
    
}

export interface AuthSetAuthenticatedAction extends IBaseActionCreator<AuthActionTypes.SET_AUTHENTICATED, UserAuthModel> {

}

export type AuthActions = AuthDataIsLoadingAction | AuthSetAuthenticatedAction;