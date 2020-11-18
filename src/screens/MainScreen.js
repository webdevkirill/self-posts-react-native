import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const MainScreen = ({navigation}) => {

    const goToPost = () => {
        navigation.navigate('Post');
    }

    return (
        <View style={styles.wrapper}>
            <Text>MainScreen</Text>
            <Button title='Перейти в пост' onPress={goToPost} />
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