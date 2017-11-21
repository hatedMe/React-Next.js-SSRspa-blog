import axios from '../fetch/http';

export const REQUEST_POSTS = 'REQUEST_POSTS';  // 请求中
export const RECEIVE_POSTS = 'RECEIVE_POSTS';  // 接受数据
export const SELECT_REDDIT = 'SELECT_REDDIT';  
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';  // 无效



export function selectReddit(reddit) {
    return {
        type: SELECT_REDDIT,
        reddit,
    };
}

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
        posts: json.data.data.map(child => child.data),
        receivedAt: Date.now(),
    };
}

function fetchPosts(reddit) {
    return dispatch => {
        dispatch(requestPosts(reddit));
        return axios.get('/api/').then(response => {
            dispatch(receivePosts(reddit, response))
        })
    };
}