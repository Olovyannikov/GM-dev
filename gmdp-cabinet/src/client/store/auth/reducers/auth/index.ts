import { AuthActionTypes, AuthSetAuthenticatedAction, UserAuthModel } from "store/types"
import { initialState } from ".."

export default (state = initialState.auth, action: AuthSetAuthenticatedAction) : UserAuthModel => {
    return action.type ===  AuthActionTypes.SET_AUTHENTICATED ? {...action.payload} : state
}