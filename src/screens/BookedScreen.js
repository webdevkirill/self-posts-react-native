import React from 'react';
import { PostList } from '../components/PostList';
import { useSelector } from 'react-redux';

export const BookedScreen = ({navigation}) => {

    const bookedPosts = useSelector(state => state.postReducer.posts.filter(post => post.booked))

    return (
        <PostList data={bookedPosts} navigation={navigation} />
    )
}