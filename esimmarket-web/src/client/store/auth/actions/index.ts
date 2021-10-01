import { AuthActionTypes, AuthDataIsLoadingAction, AuthSetAuthenticatedAction, IBaseActionCreator, UserAuthModel } from "store/types";

export interface IActionCreator<P> extends IBaseActionCreator<AuthActionTypes, P> {
    type: AuthActionTypes;
    payload: P;
}

export function actionCreator<T>(actionType: AuthActionTypes, data: T): IActionCreator<T> {
    return {
        type: actionType,
        payload: data
    }
}

export const setDataLoading = (isLoading: boolean): AuthDataIsLoadingAction => ({
    type: AuthActionTypes.DATA_IS_LOADING,
    payload: isLoading  
})

export const setUserAuth = (model: UserAuthModel): AuthSetAuthenticatedAction => ({
    type: AuthActionTypes.SET_AUTHENTICATED,
    payload: model
}) 