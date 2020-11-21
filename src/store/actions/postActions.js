import { LOAD_POSTS, TOOGLE_BOOKED, REMOVE_POST, ADD_POST } from '../types';
import { DB } from '../../db';
import * as FileSystem from 'expo-file-system';

export const loadPosts = () => {
    return async (dispatch) => {
        const posts = await DB.getPosts();
        dispatch({
            type: LOAD_POSTS,
            payload: posts
        })
    }
}

export const toogleBooked = (id) => ({ type: TOOGLE_BOOKED, payload: id })

export const removePost = (id) => ({ type: REMOVE_POST, payload: id })

export const addPost = (post) => async dispatch => {
    const fileName = post.img.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;
    try {
        await FileSystem.moveAsync({
            to: newPath,
            from: post.img
        })
    } catch (e) {
        console.log(e)
    }

    const payload = {...post, img: newPath};
    const id = await DB.createPosts(payload);
    payload.id = id;
    
    dispatch({
        type: ADD_POST,
        payload
    })
}