




import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from '../reducers/index';


import axios from '../fetch/http';


const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_POSTS':
      return Object.assign({},state,{
          item: action.posts,
          receivedAt :action.receivedAt,
          reddit : action.reddit
      })
    case 'DECREMENT':
    return Object.assign({},state,{
        isFetching: action.reddit,
      })
    default:
      return state
  }
};

// export function increment(reddit) {
//     return {
//       type: "INCREMENT",
//       reddit
//     };
// }
  
// export function decrement(reddit) {
//     return {
//       type: "DECREMENT",
//       reddit
//     };
// }





// const login = () => dispatch => {
//     axios.get('/api/startarticle').then(response => {
//         return dispatch({
//             type: 'login',
//             response
//         })
//     })
// }


// reducer
// function loginReducer(state = {}, action) {
//   var user = Object.assign(action.user, { isGuest: false })
//   return Object.assign({}, state, { user })
// }






export const initializeStore = () => {
    return createStore( reducer, composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger())) );
};
