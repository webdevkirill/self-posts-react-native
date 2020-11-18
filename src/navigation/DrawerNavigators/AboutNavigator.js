import React  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { defaultScreenOptions } from '../PostsNavigation';
import { AboutScreen } from '../../screens/AboutScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../../components/AppHeaderIcon';

const AboutStack = createStackNavigator();
export const AboutNavigator = () => (
    <AboutStack.Navigator
        screenOptions={defaultScreenOptions}
    >
        <AboutStack.Screen 
            name="About" 
            component={AboutScreen}
            options={({ navigation }) => ({
                title: 'О приложении',
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
    </AboutStack.Navigator>
)