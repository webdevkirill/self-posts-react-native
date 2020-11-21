import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { getHeaderTitle } from './getHeaderTitle';
import { MainScreenTabNavigation } from './MainScreenTabNavigation';

const Stack = createStackNavigator();
const OS = Platform.OS;
export const defaultScreenOptions = {
    headerStyle: {
        backgroundColor: OS === 'android' ? THEME.MAIN_COLOR : '#fff',
    },
    headerTintColor: OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
};

export const PostsNavigation = () => {
    return (
        <Stack.Navigator 
            screenOptions={defaultScreenOptions}
        >
            <Stack.Screen 
                name="MainScreenTabNavigation" 
                component={MainScreenTabNavigation}
                options={({ route, navigation }) => ({
                    title: getHeaderTitle(route),
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item 
                                title="Take photo" 
                                iconName="ios-camera" 
                                onPress={() => navigation.navigate('Create')}
                            />
                        </HeaderButtons>
                    ),
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item 
                                title="Toggle Drawer" 
                                iconName="ios-menu" 
                                onPress={() => navigation.toggleDrawer()}
                            />
                        </HeaderButtons>
                    ),
                })}
            />
            <Stack.Screen 
                name="Post" 
                component={PostScreen} 
                options={({route}) => ({
                    title: `Пост от ${new Date(route.params.date).toLocaleDateString()}`,
                })}
            />

        </Stack.Navigator>
    )
};