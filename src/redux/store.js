import { createStore, applyMiddleware } from 'redux';
import { getInitialState, REDUX_LS_KEY } from './initState';
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
// import { initialState } from './initState';

export const store = createStore(rootReducer, getInitialState(), composeWithDevTools(
    applyMiddleware(thunk)));

// export const store = configureStore({
//     reducer: {
//         basket: ,
//         token: ,
//     }
// });

store.subscribe(()=>{
    localStorage.setItem(REDUX_LS_KEY, JSON.stringify(store.getState()));
    
});



