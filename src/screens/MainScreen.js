import React from 'react';
import { PostList } from '../components/PostList';
import { DATA } from '../data';

export const MainScreen = ({navigation}) => {

    return (
        <PostList data={DATA} navigation={navigation} />
    )
}