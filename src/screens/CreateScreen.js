import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const CreateScreen = () => {

    return (
        <View style={styles.wrapper}>
            <Text>CreateScreen</Text>
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