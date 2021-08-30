import {
    SHIPS_FAILURE, SHIPS_SUCCESS, SHIPS_LOADING,
} from '../actions/types';
import initialState from '../utils/initialState';

export const shipReducer = ( state = initialState.ships, action ) => {

    switch (action.type) {
        case SHIPS_LOADING:
            return {
                ...state,
                loading: true,
                success: false,
                error: false,
                data: [],
            };
        case SHIPS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                success: true,
                error: false,
            };
        case SHIPS_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload,
                data: [],
            };
        default:
            return state;
    }

}
