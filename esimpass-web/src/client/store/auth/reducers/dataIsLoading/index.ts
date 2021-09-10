import { AuthActionTypes, AuthDataIsLoadingAction } from "store/types"
import { initialState } from ".."

export default (state = initialState.dataIsLoading, action: AuthDataIsLoadingAction) : boolean => {
    return action.type ===  AuthActionTypes.DATA_IS_LOADING ? action.payload : state
}