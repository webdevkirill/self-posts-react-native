import React from 'react';
import { DATA } from '../data';
import { PostList } from '../components/PostList';

export const BookedScreen = ({navigation}) => {
    return (
        <PostList data={DATA.filter(post => post.booked)} navigation={navigation} />
    )
}