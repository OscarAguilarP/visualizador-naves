import {
    SHIPS_FAILURE, SHIPS_SUCCESS, SHIPS_LOADING,
} from './types';
import { Ships } from '../api/ships';

const getShips = (async (dispatch) => {
    try {
        dispatch({ type: SHIPS_LOADING });
        const ships = await Ships.getShipsService();
        dispatch({ type: SHIPS_SUCCESS, payload: ships })
    } catch (error) {
        dispatch({ type: SHIPS_FAILURE, payload: error })
    }
    
});

export default getShips;