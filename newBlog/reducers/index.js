
import { REQUEST_POSTS_BEFORE ,REQUEST_POSTS_LODING , REQUEST_POSTS_AFTER  } from '../actions/index2'



export default function counter(state = {
    posts:[]
},action){
    switch (action.type) {
        case REQUEST_POSTS_BEFORE:
            return {
                ...state,
                isFetch : false
            }
            break;
        case REQUEST_POSTS_LODING:
            return {
                ...state,
                isFetch : 'login'
            }
            break;
        case REQUEST_POSTS_AFTER:
            return {
                ...state,
                isFetch :true,
                ...action
            }
            break;
        default:
            return state;
    }
}