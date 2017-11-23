import axios from '../fetch/http';

export const REQUEST_POSTS = 'REQUEST_POSTS';  // 请求中
export const RECEIVE_POSTS = 'RECEIVE_POSTS';  // 接受数据
export const SELECT_REDDIT = 'SELECT_REDDIT';  
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';  // 无效


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


export function invalidateReddit(reddit) {
    return {
        type: INVALIDATE_REDDIT,
        reddit,
    };
}

function requestPosts(reddit) {
    return {
        type: REQUEST_POSTS,
        reddit,
    };
}


function receivePosts(reddit, json) {
    return {
        type: RECEIVE_POSTS,
        reddit,
        posts: json.data,
        receivedAt: Date.now(),
    };
}

export function fetchPosts(reddit) {
    return dispatch => {
        return axios.get('/api/startarticle').then(response => {
            dispatch(receivePosts(reddit, response.data))
        })
    };
}