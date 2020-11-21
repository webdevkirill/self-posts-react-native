import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Post } from './Post';
import { useDispatch } from 'react-redux';
import { toogleBooked } from '../store/actions/postActions';

export const PostList = ({data, navigation}) => {
    
    const dispatch = useDispatch();

    const bookedToggleHandler = (id) => {
        dispatch(toogleBooked(id));
    }
    
    const openPostHandler = (post) => {
        navigation.navigate('Post', {
            ...post,
            bookedToggleHandler: () => bookedToggleHandler(post.id)
        });
    }

    return (
        <View style={styles.wrapper}>
            <FlatList 
                data={data} 
                keyExtractor={(post) => post.id.toString()} 
                renderItem={({item}) => <Post post={item} onOpen={openPostHandler} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})