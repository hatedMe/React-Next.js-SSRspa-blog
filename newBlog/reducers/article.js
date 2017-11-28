
import { A_REQUEST_POSTS_LODING , A_REQUEST_POSTS_AFTER  } from '../actions/article'



export default function counter(state = {
    item : []
},action){
    switch (action.type) {
        case A_REQUEST_POSTS_LODING:
            return {
                ...state,
                isFetch : false
            }
            break;
        case A_REQUEST_POSTS_AFTER:
            return {
                ...state,
                isFetch : true,
                item : state.item.concat( action.posts),
                lastUpdated : action.receivedAt
            }
            break;
        default:
            return state;
    }
}