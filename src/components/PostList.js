import React from 'react';
import { View, FlatList, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { Post } from './Post';
import { useSelector } from 'react-redux';
import { THEME } from '../theme';

export const PostList = ({data, navigation}) => {
    
    const openPostHandler = (post) => {
        navigation.navigate('Post', post);
    }

    const loading = useSelector(state => state.postReducer.loading)

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator color={THEME.MAIN_COLOR} />
            </View>
        )
    }

    if (!data.length) {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.noItems}>Создайте свой первый пост</Text>
            </View>
        )
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
    },
    noItems: {
        fontFamily: 'open-regular',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 20
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})