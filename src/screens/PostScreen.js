import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Alert } from 'react-native';
import { THEME } from '../theme';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

export const PostScreen = ({navigation, route}) => {
    const {img, text, id} = route.params;
    const booked = useSelector(state => state.postReducer.posts.find(post => post.id === id).booked);

    useEffect(() => {
        navigation.dispatch(CommonActions.setParams({ booked }));
    }, [booked, navigation]);
    
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