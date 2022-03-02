import { createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";

const appReducer = combineReducers({
    counterReducer: counterReducer,
});

export default createStore(appReducer);
//createStore crea store i l'exporta directament, sense guardar-la a una variable store


