import { combineReducers } from 'redux';
import { basketReducer } from './basketReducer/basketReducer';
import { tokenReducer } from './tokenReducer/tokenReducer';

export const rootReducer = combineReducers({
    basket: basketReducer,
    tokenUser: tokenReducer
});