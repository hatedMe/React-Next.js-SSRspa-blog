
import { REQUEST_POSTS_BEFORE ,REQUEST_POSTS_LODING , REQUEST_POSTS_AFTER  } from '../actions/index2'



export default function counter(state = {},action){
    switch (action.type) {
        case REQUEST_POSTS_BEFORE:
            return {
                ...state,
                IndexPosts : {
                    isFetch : false
                }
            }
            break;
        case REQUEST_POSTS_LODING:
            return {
                ...state,
                IndexPosts : {
                    isFetch : 'login'
                }
            }
            break;
        case REQUEST_POSTS_AFTER:
            return {
                ...state,
                IndexPosts : {
                    isFetch :true,
                    ...action
                }
            }
            break;
        default:
            return state;
    }
}