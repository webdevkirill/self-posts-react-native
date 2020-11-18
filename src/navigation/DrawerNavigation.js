import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { PostsNavigation} from './PostsNavigation';
import { AboutNavigator } from './DrawerNavigators/AboutNavigator';
import { CreateNavigator } from './DrawerNavigators/CreateNavigator';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from '../theme';

const MainNavigator = createDrawerNavigator();

export const DrawerNavigation = () => {

    return (
        <NavigationContainer>
            <MainNavigator.Navigator 
                drawerContentOptions={{
                    activeTintColor: THEME.MAIN_COLOR,
                    labelStyle: {
                        fontFamily: 'open-bold'
                    }
                }}
            >
                <MainNavigator.Screen 
                    name="PostsNavigation" 
                    component={PostsNavigation}
                    options={{
                        drawerLabel: 'Главная',
                    }}
                />
                <MainNavigator.Screen 
                    name="About" 
                    component={AboutNavigator} 
                    options={{
                        drawerLabel: 'О приложении',
                    }}
                />
                <MainNavigator.Screen 
                    name="Create" 
                    component={CreateNavigator} 
                    options={{
                        drawerLabel: 'Новый пост',
                    }}
                />
            </MainNavigator.Navigator>
        </NavigationContainer>
    )
}