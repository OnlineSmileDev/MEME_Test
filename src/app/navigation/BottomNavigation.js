import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from './BottomTabBar';
import RouteNames from './common/RouteNames';
import { MatchesTab } from './matchesNavigation';
import { MemeTab } from './memeNavigation';
import { ProfileTab } from './profileNavigation';
import { ChatTab } from './chatNavigation';

const Bottom = createBottomTabNavigator();
const BottomTabs = () => (
    <Bottom.Navigator
        tabBar={props => <BottomTabBar {...props} />}>
        <Bottom.Screen
            name={RouteNames.MemeTab}
            component={MemeTab} />
        <Bottom.Screen
            name={RouteNames.MatchesTab}
            component={MatchesTab} />
        <Bottom.Screen
            name={RouteNames.ChatTab}
            component={ChatTab} />
        <Bottom.Screen
            name={RouteNames.Profile}
            component={ProfileTab} />
    </Bottom.Navigator>
)

export { BottomTabs }