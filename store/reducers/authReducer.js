import { SIGNUP_USER, LOGIN_USER } from "../actions/authActions"

const initialState = {
    userId: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            return {
                userId: action.userSignupData.id
            }
            case LOGIN_USER:
                return {
                    userId: action.userLoginData.id
                }
        default:
            return state
    }
}

export default authReducer