import React from 'react';
import RouteNames from './common/RouteNames';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabs } from './BottomNavigation';
import { initialScreens } from './initialNavigation';

const Stack = createStackNavigator();

export default RootStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName={RouteNames.Splash}
            headerMode={'none'}>
            {initialScreens.map(x => (
                <Stack.Screen
                    name={x.name}
                    key={x.name}
                    component={x.component} />
            ))}
            <Stack.Screen
                name={RouteNames.Main}
                component={BottomTabs} />
        </Stack.Navigator>

    </NavigationContainer>
)