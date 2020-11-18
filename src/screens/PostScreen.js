import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PostScreen = ({navigation, route}) => {
    const {id, booked, date, img, text} = route;
    const postId = navigation.id;

    return (
        <View style={styles.wrapper}>
            <Text>PostScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})