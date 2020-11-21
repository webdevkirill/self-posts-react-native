import { LOAD_POSTS, TOOGLE_BOOKED, REMOVE_POST, ADD_POST } from '../types';
import { DATA } from '../../data';

export const loadPosts = () => {
    return {
        type: LOAD_POSTS,
        payload: DATA
    }
}

export const toogleBooked = (id) => ({ type: TOOGLE_BOOKED, payload: id })

export const removePost = (id) => ({ type: REMOVE_POST, payload: id })

export const addPost = (post) => {
    post.id = Date.now().toString();
    return {
        type: ADD_POST,
        payload: post
    }
}