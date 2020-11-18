import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { PostsNavigation } from './PostsNavigation';
import { AboutScreen } from '../screens/AboutScreen';
import { CreateScreen } from '../screens/CreateScreen';

const MainNavigator = createDrawerNavigator();

export const DrawerNavigation = () => {

    return (
        <NavigationContainer>
            <MainNavigator.Navigator>
                <MainNavigator.Screen name="PostsNavigation" component={PostsNavigation} />
                <MainNavigator.Screen name="About" component={AboutScreen} />
                <MainNavigator.Screen name="Create" component={CreateScreen} />
            </MainNavigator.Navigator>
        </NavigationContainer>
    )
}