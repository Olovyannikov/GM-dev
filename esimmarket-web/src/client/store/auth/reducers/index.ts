import { IAuthReducerModel } from "store/types";

import dataIsLoading from './dataIsLoading';
import auth from './auth';
import { combineReducers } from "redux";

export const initialState : IAuthReducerModel = {
    dataIsLoading: false,
    auth: {
        email: ''
    }
}

export default combineReducers<IAuthReducerModel>({
    dataIsLoading,
    auth
})
