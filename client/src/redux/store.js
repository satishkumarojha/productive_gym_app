import { combineReducers,legacy_createStore } from "redux";
import { authReducer } from "./Auth/authReducer";
import { todoReducer } from "./Todo/todoReducer";

export const rootReducer = combineReducers({
    auth:authReducer,
    todos:todoReducer
})

export const store = legacy_createStore(rootReducer);