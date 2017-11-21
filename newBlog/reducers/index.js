
import { REQUEST_POSTS ,RECEIVE_POSTS ,SELECT_REDDIT,INVALIDATE_REDDIT  } from '../actions/index'



export default function counter(state={
    isFetch : false,
    items: []
} ,action){
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                isFetch:true,
            }
            break;
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetch:2,
            }
            break;
        case INVALIDATE_REDDIT:
            return {
                ...state,
                isFetch:3,
            }
            break;
        default:
        return state;
            
    }
}