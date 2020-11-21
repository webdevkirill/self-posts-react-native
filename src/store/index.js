import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { postReducer } from './reducers/postReducer';

const rootReducer = combineReducers({postReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));