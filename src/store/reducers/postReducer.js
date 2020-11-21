
import { LOAD_POSTS, TOOGLE_BOOKED, REMOVE_POST } from '../types';

const initialState = {
    posts: [],
};

const handlers = {
    [LOAD_POSTS]: (state, {payload}) => ({...state, posts: payload}),
    [TOOGLE_BOOKED]: (state, {payload}) => ({
        ...state, 
        posts: [...state.posts].map(post => {
            if (post.id === payload) {
                post.booked = !post.booked
            }
            return post
        })
    }),
    [REMOVE_POST]: (state, {payload}) => ({
        ...state, 
        posts: [...state.posts].filter(post => post.id !== payload)
    }),
    DEFAULT: (state) => state,
};

export const postReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action)
}