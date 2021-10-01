import { createAction } from "./createAction";
import { Action } from "@glonassmobile/codebase-web/Action";
import { State } from "../State";
import { INITIAL_STATE } from "../StateApi";

export const hideModalCode = 'hideModal';

export const hideModalAction = () => createAction(hideModalCode);

export const dohideModal = (state = INITIAL_STATE) : State => ({
    ...state,
    publicWizard : null,
    privateWizard : null,
})
