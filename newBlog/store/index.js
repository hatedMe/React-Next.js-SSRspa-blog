




import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from '../reducers/index';


export const initializeStore = () => {
    return createStore( reducers, composeWithDevTools(applyMiddleware( thunkMiddleware )) );
};
