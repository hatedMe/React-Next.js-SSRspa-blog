




import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from '../reducers/index';





const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
};


export const initializeStore = () => {
    return createStore( reducer, composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger())) );
};

//, compose(applyMiddleware(thunkMiddleware, createLogger()),
    
    //window.devToolsExtension ? window.devToolsExtension() : f => f
 //)

  //default initializeStore;