import { Store } from "redux";
import { createStore } from "redux";
import { doSetAuthenticated, setAuthenticatedCode, setAuthenticatedAction } from "./actions/setAuthenticated";
import { doPublicWizard, publicWizardCode, publicWizardAction } from './actions/showPublicWizard';
import { hideModalCode, dohideModal, hideModalAction } from './actions/hideModal';
import { doPrivateWizard, privateWizardAction, privateWizardCode } from './actions/showPrivateWizard';
import { SHOW_PRIVATE_WIZARD_MODE, SHOW_PUBLIC_WIZARD_MODE, State } from "./State";
import { Action } from "@glonassmobile/codebase-web/Action";

export const INITIAL_STATE : State = {
    auth : {},
}

const reducersMap = {};

reducersMap [setAuthenticatedCode] = doSetAuthenticated;
reducersMap [publicWizardCode] = doPublicWizard;
reducersMap [hideModalCode] = dohideModal;
reducersMap [privateWizardCode] = doPrivateWizard;

const reducer = (state = INITIAL_STATE, action: Action<any>) : State => {

    const actionReducer = reducersMap[action.type]
    if (actionReducer) {
        return actionReducer (state, action);
    }
    else {
        return state;
    }
}

export const STORE = createStore(reducer);

export const createDispatcher = (store : Store<State, any>) => ({
    setAuthenticated : (email : string) => store.dispatch (setAuthenticatedAction (email)),
    showPublicWizard : (mode : SHOW_PUBLIC_WIZARD_MODE) => store.dispatch(publicWizardAction(mode)),
    hideModal : () => store.dispatch(hideModalAction()),
    showPrivateWizard : (mode : SHOW_PRIVATE_WIZARD_MODE) => store.dispatch(privateWizardAction(mode)),
})

export const STATE_API = createDispatcher (STORE)

