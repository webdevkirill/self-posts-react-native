import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme';
import { Platform, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

const Stack = createStackNavigator();
const defaultScreenOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
};

export const AppNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Main"
                screenOptions={defaultScreenOptions}
            >
                <Stack.Screen 
                    name="Main" 
                    component={MainScreen}
                    options={{
                        title: 'Мой блог',
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item 
                                    title="Take photo" 
                                    iconName="ios-camera" 
                                    onPress={() => console.log("Take photo")}
                                />
                            </HeaderButtons>
                        )
                    }}
                />
                <Stack.Screen 
                    name="Post" 
                    component={PostScreen} 
                    options={({route}) => ({
                        title: `Пост от ${new Date(route.params.date).toLocaleDateString()}`
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};