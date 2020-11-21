import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, Keyboard } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { THEME } from '../theme';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/actions/postActions';
import { PhotoPicker } from '../components/PhotoPicker';

export const CreateScreen = ({navigation}) => {

    const [text, setText] = useState(''); 
    const [img, setImage] = useState(null);
    const dispatch = useDispatch();
    
    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text,
            img,
            booked: false
        };
        dispatch(addPost(post));
        navigation.navigate('Main');
    }

    const photoPickHandler = (uri) => {
        setImage(uri);
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Новый пост</Text>
                    <TextInput 
                        style={styles.textArea}
                        placeholder="Введите текст заметки"
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <PhotoPicker onPick={photoPickHandler} />
                    <Button
                        title="Создать пост"
                        color={THEME.MAIN_COLOR}
                        onPress={saveHandler}
                        disabled={!text || !img}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'open-regular',
        marginVertical: 10
    },
    textArea: {
        padding: 10,
        marginBottom: 10
    }
})