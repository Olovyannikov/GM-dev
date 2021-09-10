import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import auth from './auth/reducers';

import * as AuthActionCreators from './auth/actions'

const rootReducer = combineReducers({
    auth
});

export const ActionCreators = {
    ...AuthActionCreators
}

export type RootState = ReturnType<typeof rootReducer>

export const configureStore = () => {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))
    return store
}