import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const AboutScreen = () => {

    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>Лучшее приложение для личных заметок!</Text>
            <Text style={styles.text}>Версия приложения <Text style={styles.version}>1.0.0</Text></Text>
            <Text style={styles.text}>Автор <Text style={styles.version}>Кирилл Фёдоров</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'open-regular',
        marginBottom: 5
    },
    version: {
        fontFamily: 'open-bold'
    }
})