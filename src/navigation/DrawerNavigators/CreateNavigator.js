import React  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { defaultScreenOptions } from '../PostsNavigation';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../../components/AppHeaderIcon';
import { CreateScreen } from '../../screens/CreateScreen';

const CreateStack = createStackNavigator();
export const CreateNavigator = () => (
    <CreateStack.Navigator
        screenOptions={defaultScreenOptions}
    >
        <CreateStack.Screen 
            name="Create" 
            component={CreateScreen}
            options={({ navigation }) => ({
                title: 'Новый пост',
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
    </CreateStack.Navigator>
)