import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Post } from '../components/Post';
import { DATA } from '../data';

export const BookedScreen = ({navigation}) => {
    const openPostHandler = (post) => {
        navigation.navigate('Post', post);
    }

    return (
        <View style={styles.wrapper}>
            <FlatList 
                data={DATA.filter(post => post.booked)} 
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