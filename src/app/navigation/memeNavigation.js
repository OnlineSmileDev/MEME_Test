import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RouteNames from './common/RouteNames';
import RegularMemeResponseScreen from '../screens/Memes/RegularMemeResponse/RegularMemeResponseScreen';
import ShareWithMatchScreen from '../screens/ShareWithMatch/ShareWithMatchScreen';


const Meme = createStackNavigator();
const MemeTab = () => (
    <Meme.Navigator
        initialRouteName={RouteNames.RegularMemeResponse}
        headerMode={'none'}>
        <Meme.Screen
            name={RouteNames.RegularMemeResponse}
            component={RegularMemeResponseScreen} />
        <Meme.Screen
            name={RouteNames.ShareWithMatch}
            component={ShareWithMatchScreen} />
    </Meme.Navigator>);

export { MemeTab }