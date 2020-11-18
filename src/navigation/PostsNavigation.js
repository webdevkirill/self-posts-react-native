import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
const defaultScreenOptions = {
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
                                onPress={() => console.log("Take photo")}
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
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item 
                                title="Take photo" 
                                iconName={route.params.booked ? "ios-star" : "ios-star-outline"}
                                onPress={() => console.log("Take photo")}
                            />
                        </HeaderButtons>
                    ),
                })}
            />

        </Stack.Navigator>
    )
};