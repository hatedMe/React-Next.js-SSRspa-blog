import axios from '../fetch/http';



export const A_REQUEST_POSTS_LODING = 'A_REQUEST_POSTS_LODING';  // 请求数据之中
export const A_REQUEST_POSTS_AFTER = 'A_REQUEST_POSTS_AFTER';  // 请求数据之后
export const A_REQUEST_NEXT_POSTS = 'A_REQUEST_NEXT_POSTS';  // 请求数据之后


// const stateTree ={
// 	home : {
// 		isFetching : true,
// 		didInvalidate :false,
// 		data: {
// 			totle:25,
// 			item : [1,2,3],  // 10
// 			limt : 10,
// 			pagesize : 2,
// 		},
// 		lastUpdated : 1700000 // 时间戳
// 	}
// }






function fetchPostsLoding(reddit){
    return {
        type: A_REQUEST_POSTS_LODING,
        reddit,
      };
}

function fetchPostsAter(reddit,json){
    return {
        type: A_REQUEST_POSTS_AFTER,
        reddit,
        posts: json.data,
        receivedAt: Date.now(),
    };
}


// function nextFetchPosts(state){
//     return {
//         type : A_REQUEST_NEXT_POSTS,

//     }
// }



function fetchPosts(reddit) {
    return dispatch => {
        dispatch( fetchPostsLoding(reddit) );
        return axios.get(`/api/article?id=${reddit}`).then(response => {
            if( response.data.status == 200 ){
                dispatch( fetchPostsAter(reddit, response.data) )
            }
        })
    };
}


function isFetchPosts(state, reddit){
    if( !!state.articleReducers.item.length ){
        return !state.articleReducers.item.some( e =>{
            return reddit == e.articleId
        });
    }else{
        return true
    }
}


export function fetchPostsItem(reddit) {
    return (dispatch, getState) => {
        if ( isFetchPosts( getState(), reddit) ) {
            return dispatch( fetchPosts(reddit) );
        }
      return null;
    };
}

