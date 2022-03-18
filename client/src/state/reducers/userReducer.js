import { SET_USERS } from '../actions/types';
import initialState from '../initialState';

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_USERS:
            return [...state, payload];
        default:
            return state;
    }
};

export default userReducer;