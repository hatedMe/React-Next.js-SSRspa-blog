




import { createStore, applyMiddleware, compose ,combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from '../reducers/index';
import articleReducers from '../reducers/article'


const rootReducer = {
    reducers,
    articleReducers,
}

export const initializeStore = () => {
    return createStore( 
        combineReducers(rootReducer),
        composeWithDevTools(applyMiddleware( thunkMiddleware )) );
};
