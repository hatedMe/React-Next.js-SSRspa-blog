import axios from '../fetch/http';


export const REQUEST_POSTS_BEFORE = 'REQUEST_POSTS_BEFORE';  // 请求数据之前
export const REQUEST_POSTS_LODING = 'REQUEST_POSTS_LODING';  // 请求数据之中
export const REQUEST_POSTS_AFTER = 'REQUEST_POSTS_AFTER';  // 请求数据之后



// const stateTree ={
// 	home : {
// 		isFetching : true,
// 		didInvalidate :false,
// 		data: {
// 			totle:26,
// 			item : [1,2,3],  // 10
// 			limt : 10,
// 			pagesize : 2,
// 		},
// 		lastUpdated : 1700000 // 时间戳
// 	}
// }

function fetchPostsBefore(reddit){
    return {
        type: REQUEST_POSTS_BEFORE,
        reddit,
      };
}

function fetchPostsLoding(reddit){
    return {
        type: REQUEST_POSTS_LODING,
        reddit,
      };
}

function fetchPostsAter(reddit,json){
    return {
        type: REQUEST_POSTS_AFTER,
        reddit,
        posts: json.data,
        receivedAt: Date.now(),
    };
}



function fetchPosts(reddit) {
    return dispatch => {
        dispatch( fetchPostsBefore(reddit ) );
        dispatch( fetchPostsLoding(reddit) );
        return axios.get('/api/startarticle').then(response => {
            dispatch(fetchPostsAter(reddit, response.data))
        })
    };
}


function isFetchPosts(state, reddit){
    // if( !!state.reducers.posts.length ){
    //     return !state.reducers.posts.some( e =>{
    //         return reddit == e.articleId
    //     });
    // }else{
    //     return true
    // }

    return !state.reducers.posts.length;
}


export function fetchPostsIfNeeded(reddit) {
    return (dispatch, getState) => {
      if (isFetchPosts( getState(), reddit) ) {
        return dispatch(fetchPosts(reddit));
      }
      return null;
    };
}

