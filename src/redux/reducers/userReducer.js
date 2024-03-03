import * as actionTypes from '../constants/userConstant';

export const getUserReducer = (state = {user: {}}, action) => {
    switch(action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            return { user: action.payload }
        case actionTypes.USER_LOGIN_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};