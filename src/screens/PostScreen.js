import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Alert } from 'react-native';
import { THEME } from '../theme';

export const PostScreen = ({navigation, route}) => {
    const {id, booked, date, img, text} = route.params;
    
    const removeHandler = () => {
        Alert.alert(
            'Удаление поста',
            'Вы точно хотите удалить пост?',
            [
                {
                    text: 'Отменить',
                    style: 'cancel'
                },
                {
                    text: 'Удалить',
                    onPress: () => {},
                    style: 'destructive'
                }
            ],
            {cancelable: false}
        )
    }

    return (
        <ScrollView>
            <Image source={{uri: img}} style={styles.image} />
            <View style={styles.textWrap}>
                <Text style={styles.title}>{text}</Text>
            </View>
            <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={removeHandler} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10,
    },
    title: {
        fontFamily: 'open-regular'
    }
})