import React from 'react';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MainScreen } from '../screens/MainScreen';
import { BookedScreen } from '../screens/BookedScreen';
import { THEME } from '../theme';

const OS = Platform.OS;
const Tab = OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const OSTabNavigator = ({children}) => OS === 'android' ? 
    <Tab.Navigator
        barStyle={{
            backgroundColor: THEME.MAIN_COLOR
        }}
        shifting={true}
        activeTintColor='#fff'
    >
        {children}
    </Tab.Navigator> :
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: THEME.MAIN_COLOR,
        }}
    >
        {children}
    </Tab.Navigator>

export const MainScreenTabNavigator = () => {
    return (
        <OSTabNavigator>
            <Tab.Screen 
                name="Main" 
                component={MainScreen}
                options={{
                    tabBarLabel: 'Все',
                    tabBarIcon: ({color}) => (
                        <Ionicons 
                            name='ios-albums' 
                            size={24} 
                            color={color} 
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Booked" 
                component={BookedScreen} 
                options={{
                    tabBarLabel: 'Изрбанное',
                    tabBarIcon: ({color}) => (
                        <Ionicons 
                            name='ios-star' 
                            size={24} 
                            color={color} 
                        />
                    )
                }}
            />
        </OSTabNavigator>
    );
}