import { createStore, combineReducers } from "redux";
import { shipReducer } from "../reducers/shipReducer";

const reducer = combineReducers({
    ships: shipReducer
})

export const store = createStore(reducer);