import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SendLikeScreen from '../screens/Matches/SendLike/SendLikeScreen';
import NoMoreMatchesScreen from '../screens/Matches/NoMoreMatches/NoMoreMatchesScreen';
import MatchesScreen from '../screens/Matches/Matches/MatchesScreen';
import RouteNames from './common/RouteNames';

const Matches = createStackNavigator();
const MatchesTab = () => (
    <Matches.Navigator
        initialRouteName={RouteNames.Matches}
        headerMode={'none'}>
        <Matches.Screen
            name={RouteNames.Matches}
            component={MatchesScreen} />
        <Matches.Screen
            name={RouteNames.NoMoreMatches}
            component={NoMoreMatchesScreen} />
        <Matches.Screen
            name={RouteNames.SendLike}
            component={SendLikeScreen} />
    </Matches.Navigator>
)

export { MatchesTab }