import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme';
import { Platform, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { BookedScreen } from '../screens/BookedScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const defaultScreenOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
};

const Tab = createBottomTabNavigator();

const MainScreenTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: THEME.MAIN_COLOR,
            }}
        >
            <Tab.Screen 
                name="Main" 
                component={MainScreen}
                options={{
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
                    tabBarIcon: ({color}) => (
                        <Ionicons 
                            name='ios-star' 
                            size={24} 
                            color={color} 
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Main"
                screenOptions={defaultScreenOptions}
            >
                <Stack.Screen 
                    name="Main" 
                    component={MainScreenTabNavigator}
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
                        ),
                        headerLeft: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item 
                                    title="Toggle Drawer" 
                                    iconName="ios-menu" 
                                    onPress={() => console.log("Take photo")}
                                />
                            </HeaderButtons>
                        ),
                    }}
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
        </NavigationContainer>
    )
};