import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Alert } from 'react-native';
import { THEME } from '../theme';
import { useSelector, useDispatch } from 'react-redux';
import { removePost, toogleBooked } from '../store/actions/postActions';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const PostScreen = ({navigation, route}) => {
    const {img, text, id} = route.params;
    const booked = useSelector(state => state.postReducer.posts.some(post => post.id === id && post.booked));
    const dispatch = useDispatch();

    const bookedToggleHandler = () => {
        dispatch(toogleBooked(id))
    }

    console.log(1)

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item 
                        title="Booked favourite" 
                        iconName={booked ? "ios-star" : "ios-star-outline"}
                        onPress={bookedToggleHandler}
                    />
                </HeaderButtons>
            ),
        });
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
                    onPress: () => {
                        navigation.navigate('Main');
                        dispatch(removePost(id));
                    },  
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