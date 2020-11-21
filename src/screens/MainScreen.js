import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostList } from '../components/PostList';
import { loadPosts } from '../store/actions/postActions';

export const MainScreen = ({navigation}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch, loadPosts]);

    const posts = useSelector(state => state.postReducer.posts)

    return (
        <PostList data={posts} navigation={navigation} />
    )
}