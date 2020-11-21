import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { Post } from './Post';

export const PostList = ({data, navigation}) => {
    
    const openPostHandler = (post) => {
        navigation.navigate('Post', post);
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
    }
})