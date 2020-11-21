import { LOAD_POSTS, TOOGLE_BOOKED } from '../types';
import { DATA } from '../../data';

export const loadPosts = () => {
    return {
        type: LOAD_POSTS,
        payload: DATA
    }
}

export const toogleBooked = (id) => {

    return {
        type: TOOGLE_BOOKED,
        payload: id
    }
}