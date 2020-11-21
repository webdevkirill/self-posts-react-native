
import { LOAD_POSTS, TOOGLE_BOOKED } from '../types';

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
    DEFAULT: (state) => state,
};

export const postReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action)
}