
import { LOAD_POSTS } from '../types';

const initialState = {
    posts: [],
};

const handlers = {
    [LOAD_POSTS]: (state, {payload}) => ({...state, posts: payload}),
    DEFAULT: (state) => state,
};

export const postReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action)
}