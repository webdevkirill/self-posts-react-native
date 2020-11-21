import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { View, StyleSheet, Image, Button, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';

const getPermissions = async () => {
    const {status} = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
    )
    if (status !== 'granted') {
        Alert.alert('Ошибка', 'Вы не дали права на использование камеры')
        return false
    } else {
        return true
    }
}


export const PhotoPicker = ({}) => {

    const [image, setImage] = useState(null);

    const takePhoto = async () => {
        const hasPermissions = await getPermissions();
        if (!hasPermissions) {
            return
        }

        const img = await ImagePicker.launchCameraAsync ({
            quality: 0.7,
            allowsEditing: false,
            aspect: [16, 9]
        });
    }

    return (
        <View style={styles.wrapper}>
            <Button 
                title="Сделать фото"
                onPress={takePhoto}
            />
            {
                image && 
                <Image source={{uri: image}} style={styles.img} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 10
    }
})