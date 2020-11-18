import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { PostsNavigation} from './PostsNavigation';
import { AboutNavigator } from './DrawerNavigators/AboutNavigator';
import { CreateNavigator } from './DrawerNavigators/CreateNavigator';

const MainNavigator = createDrawerNavigator();

export const DrawerNavigation = () => {

    return (
        <NavigationContainer>
            <MainNavigator.Navigator>
                <MainNavigator.Screen name="PostsNavigation" component={PostsNavigation} />
                <MainNavigator.Screen name="About" component={AboutNavigator} />
                <MainNavigator.Screen name="Create" component={CreateNavigator} />
            </MainNavigator.Navigator>
        </NavigationContainer>
    )
}