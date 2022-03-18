import axios from 'axios';

import { SET_USERS } from '../actions/types';
import initialState from '../initialState';

export const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_USERS:
            return {...state, posts: payload.posts};
        default:
            return state;
    }
};

export const fetchPostsSuccess = (posts) => ({
    type: 'SET_USERS',
    payload: { posts },
});

export const fetchPosts = () => {
    return async (dispatch) => {
        try {
            let posts = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            );
            dispatch(fetchPostsSuccess(posts.data.splice(0, 5))); //store first five posts
        } catch (e) {
            console.log(e);
        }
    };
};
